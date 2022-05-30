import { render } from '../framework/render.js';
import { getFilmSectionConfig, getSortType} from '../config';
import { updateItem } from '../utils/appService';
import ContainerView from '../view/container-view';
import FilmListTitleView from '../view/film-list-title-view';
import FilmCardPresenter from './film-card-presenter.js';

export default class FilmsList {
  #sortTypes = getSortType();
  filmCardsMap = new Map();
  #filmList = null;
  #commonFilmList = null;
  #commonReferenceModel = null;

  #commonSourceFilmList = null;

  constructor(listName) {
    this.listName = listName;
  }

  _clearCardList = () => {
    this.filmCardsMap.forEach((filmCard) => filmCard.destroy());
    this.filmCardsMap.clear();
  };

  _handleTaskChange = (updatedCard) => {
    this.#commonFilmList = updateItem(this.#commonFilmList, updatedCard);
    this.#commonSourceFilmList =  updateItem(this.#commonSourceFilmList, updatedCard);
    this.filmCardsMap.get(updatedCard.id).init(updatedCard, this.#commonReferenceModel);
  };

  _renderFilm = (contentSection, filmItem, referenceModel, rootComponent) => {
    const filmCard = new FilmCardPresenter(contentSection, rootComponent, this._handleTaskChange);
    filmCard.init(filmItem, referenceModel);
    this.filmCardsMap.set(filmItem.id, filmCard);
  };

  _renderFilmsSlice = (contentSection, films, referenceDataModel, startIndex, stopIndex, rootComponent) => {
    this.#commonFilmList = films;
    this.#commonReferenceModel = referenceDataModel;
    this.#commonFilmList.slice(startIndex, stopIndex).forEach((filmItem) => this._renderFilm(contentSection, filmItem, this.#commonReferenceModel, rootComponent));
  };

  _renderFilmList = (contentSection, films, referenceDataModel, startIndex, stopIndex, rootComponent) => {
    const filmListContainer = new ContainerView('filmListContainer');
    render(filmListContainer, contentSection);
    this._renderFilmsSlice(filmListContainer, films, referenceDataModel, startIndex, stopIndex, rootComponent);
  };

  init = (contentSection, dataset, referenceModel, rootComponent) => {
    this.#filmList = dataset;
    const renderStartIndex = 0;
    const sectionConfig = getFilmSectionConfig()[this.listName];
    const filmListSectionComponent = new ContainerView(sectionConfig.sectionName);
    const filmListSectionTitleComponent = new FilmListTitleView(sectionConfig.defaultTitle, sectionConfig.defaultTitleClass);
    render(filmListSectionComponent, contentSection);
    render(filmListSectionTitleComponent, filmListSectionComponent.element);
    if (this.#filmList.length > 0) {
      this._renderFilmList(filmListSectionComponent.element, this.#filmList, referenceModel, renderStartIndex, sectionConfig.LIST_SLICE, rootComponent);
    }
  };
}
