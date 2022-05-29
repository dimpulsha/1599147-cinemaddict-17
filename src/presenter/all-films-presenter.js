import { render } from '../framework/render.js';
import { getFilmSectionConfig } from '../config';
import FilmsList from './films-list-presenter';
import ContainerView from '../view/container-view';
import FilmListTitleView from '../view/film-list-title-view';
import ShowMorePresenter from './show-more-presenter.js';

export default class AllFilmsList extends FilmsList{
  #sectionConfig = getFilmSectionConfig()[this.listName];
  #filmSliceCount = this.#sectionConfig.LIST_SLICE;
  #renderFilmCount = this.#filmSliceCount;
  #renderStartIndex = 0;
  #filmListContainer = new ContainerView('filmListContainer');
  #showMoreControl = null;
  #filmList = null;

  #renderShowMoreControl = (contentSection, dataset, rootComponent) => {
    this.#showMoreControl = new ShowMorePresenter(contentSection, this.#handleShowMoreClick(dataset, rootComponent));
    this.#showMoreControl.init();
  };

  _renderFilmList = (contentSection, dataset, referenceDataModel, startIndex, stopIndex, rootComponent) => {
    render(this.#filmListContainer, contentSection);
    this._renderFilmsSlice(this.#filmListContainer, dataset, referenceDataModel, startIndex, stopIndex, rootComponent);

    if (dataset.length > this.#filmSliceCount) {
      this.#renderShowMoreControl(contentSection, dataset, rootComponent);
    }
  };

  #handleShowMoreClick = (dataset, rootComponent) => () => {
    this.#renderStartIndex =+ this.#renderFilmCount;
    this.#renderFilmCount = this.#renderFilmCount + this.#filmSliceCount;
    this._renderFilmsSlice(this.#filmListContainer, dataset, this.referenceDataModel, this.#renderStartIndex,  this.#renderFilmCount, rootComponent);

    if (dataset.length <= this.#renderFilmCount) {
      this.#showMoreControl.destroy();
    }
  };

  #renderFilmListTitle = (contentSection, filterKind) => {
    let filmListSectionTitleComponent = new FilmListTitleView(this.#sectionConfig.defaultTitle, this.#sectionConfig.defaultTitleClass);
    if (filterKind) {
      filmListSectionTitleComponent = new FilmListTitleView(this.#sectionConfig.filters[filterKind].emptyTitle);
    }
    render(filmListSectionTitleComponent, contentSection);
  };

  #renderFilmContainerContent = (contentSection, dataset, referenceModel, rootComponent) => {
    //  пока заглушка
    const filterKind = null;
    if (dataset.length === 0) {
      this.#renderFilmListTitle(contentSection.element, filterKind);
      return;
    }
    this.#renderFilmListTitle(contentSection.element, filterKind);
    this._renderFilmList(contentSection.element, dataset, referenceModel, this.#renderStartIndex, this.#filmSliceCount, rootComponent);
  };

  _clearCardList = () => {
    this.filmCardsMap.forEach((filmCard) => filmCard.destroy());
    this.filmCardsMap.clear();
    this.#renderStartIndex = 0;
    this.#showMoreControl.destroy();
  };

  init = (contentSection, dataset, referenceModel, rootComponent) => {
    this.#filmList = dataset;
    const filmListSectionComponent = new ContainerView(this.#sectionConfig.sectionName);
    render(filmListSectionComponent, contentSection);
    this.#renderFilmContainerContent(filmListSectionComponent, this.#filmList, referenceModel, rootComponent);
  };
}
