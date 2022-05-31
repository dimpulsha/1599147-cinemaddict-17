import { render } from '../framework/render.js';
import { getFilmSectionConfig, getSortType } from '../config';
import { updateItem, getFilmRatingWeight, sortDateUp } from '../utils/appService';
import ContainerView from '../view/container-view';
import FilmListTitleView from '../view/film-list-title-view';
import ShowMorePresenter from './show-more-presenter.js';
import FilmCardPresenter from './film-card-presenter.js';

export default class AllFilmsList {
  #sectionConfig = getFilmSectionConfig()['ALL'];
  #filmSliceCount = this.#sectionConfig.LIST_SLICE;
  #renderFilmCount = this.#filmSliceCount;
  #renderStartIndex = 0;
  #filmListContainer = new ContainerView('filmListContainer');
  #showMoreControl = null;
  #filmList = null;
  #sourceFilmList = null;
  #referenceModel = null;
  #applicationRoot = null;
  #sortType = getSortType();
  #initDataModel = null;
  listName = null;
  #filmCardsMap = new Map();

  #filmListSectionComponent = new ContainerView(this.#sectionConfig.sectionName);

  constructor(dataModel) {
    this.#initDataModel = dataModel;
    this.#sourceFilmList = this.#initDataModel.films;
  }

  sortFilms = (sortType) => {
    switch (sortType) {
      case this.#sortType.RATING:
        this.#filmList.sort(getFilmRatingWeight);
        break;
      case this.#sortType.DATE:
        this.#filmList.sort(sortDateUp);
        break;
      default:
        this.#filmList = this.#sourceFilmList.slice();
    }

    this.clearCardList();
    this.#renderFilmListContent();
  };

  #handleTaskChange = (updatedCard) => {
    this.#filmList = updateItem(this.#filmList, updatedCard);
    this.#sourceFilmList =  updateItem(this.#sourceFilmList, updatedCard);
    this.#filmCardsMap.get(updatedCard.id).init(updatedCard, this.#referenceModel);
  };


  #renderFilmListTitle = (contentSection, filterKind) => {
    let filmListSectionTitleComponent = new FilmListTitleView(this.#sectionConfig.defaultTitle, this.#sectionConfig.defaultTitleClass);
    if (filterKind) {
      filmListSectionTitleComponent = new FilmListTitleView(this.#sectionConfig.filters[filterKind].emptyTitle);
    }
    render(filmListSectionTitleComponent, contentSection);
  };

  clearCardList = () => {
    this.#filmCardsMap.forEach((filmCard) => filmCard.destroy());
    this.#filmCardsMap.clear();
    this.#renderStartIndex = 0;
    this.#renderFilmCount = this.#filmSliceCount;
    if (this.#showMoreControl) {
      this.#showMoreControl.destroy();
    }
  };

  init = (contentSection, referenceModel, rootComponent) => {
    this.#filmList = this.#initDataModel.films;
    this.#referenceModel = referenceModel;
    this.#applicationRoot = rootComponent;
    render(this.#filmListSectionComponent, contentSection);
    this.#renderFilmContainerContent();
  };

  #renderFilmContainerContent = () => {
    //  пока заглушка
    const filterKind = null;
    if (this.#filmList.length === 0) {
      this.#renderFilmListTitle(this.#filmListSectionComponent.element, filterKind);
      return;
    }
    this.#renderFilmListTitle(this.#filmListSectionComponent.element, filterKind);
    this.#renderFilmList( );
  };

  #renderFilmList = () => {
    render(this.#filmListContainer, this.#filmListSectionComponent.element);
    this.#renderFilmListContent();
  };

  #renderFilmListContent = () => {
    this.renderFilmsSlice();

    if (this.#filmList.length > this.#filmSliceCount) {
      this.#renderShowMoreControl();
    }
  };

  #renderShowMoreControl = () => {
    this.#showMoreControl = new ShowMorePresenter(this.#filmListSectionComponent.element, this.#handleShowMoreClick(this.#filmList, this.#applicationRoot));
    this.#showMoreControl.init();
  };

  renderFilmsSlice = () => {
    this.#filmList.slice(this.#renderStartIndex , this.#renderFilmCount).forEach((filmItem) => this.#renderFilm(filmItem));
  };

  #renderFilm = (filmItem) => {
    const filmCard = new FilmCardPresenter(this.#filmListContainer, this.#applicationRoot, this.#handleTaskChange);
    filmCard.init(filmItem, this.#referenceModel);
    this.#filmCardsMap.set(filmItem.id, filmCard);
  };

  #handleShowMoreClick = () => () => {
    this.#renderStartIndex =+ this.#renderFilmCount;
    this.#renderFilmCount = this.#renderFilmCount + this.#filmSliceCount;
    this.renderFilmsSlice();

    if (this.#filmList.length <= this.#renderFilmCount) {
      this.#showMoreControl.destroy();
    }
  };
}
