import { render } from '../framework/render.js';
import { getFilmSectionConfig } from '../config';
import FilmsList from './films-list-presenter';
import ContainerView from '../view/container-view';
import FilmListTitleView from '../view/film-list-title-view';
import ShowMoreView from '../view/show-more-view';

export default class AllFilmsList extends FilmsList{
  #showMoreComponent = new ShowMoreView();
  #sectionConfig = getFilmSectionConfig()[this.listName];
  #filmSliceCount = this.#sectionConfig.LIST_SLICE;
  #renderFilmCount = this.#filmSliceCount;
  #renderStartIndex = 0;
  #filmListContainer = new ContainerView('filmListContainer');

  _renderFilmList = (contentSection, dataset, referenceDataModel, startIndex, stopIndex, rootComponent) => {
    render(this.#filmListContainer, contentSection);
    this._renderFilmsSlice(this.#filmListContainer, dataset, referenceDataModel, startIndex, stopIndex, rootComponent);

    if (dataset.length > this.#filmSliceCount) {
      render(this.#showMoreComponent, contentSection);
      this.#showMoreComponent.setClickHandler(this.#handleShowMoreClick(dataset));
    }
  };

  #handleShowMoreClick = (dataset) => () => {
    this.#renderStartIndex =+ this.#renderFilmCount;
    this.#renderFilmCount = this.#renderFilmCount + this.#filmSliceCount;
    this._renderFilmsSlice(this.#filmListContainer, dataset, this.referenceDataModel, this.#renderStartIndex,  this.#renderFilmCount);

    if (dataset.length <= this.#renderFilmCount) {
      this.#showMoreComponent.element.remove();
      this.#showMoreComponent.removeElement();
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


  init = (contentSection, dataset, referenceModel, rootComponent) => {
    const filmListSectionComponent = new ContainerView(this.#sectionConfig.sectionName);
    render(filmListSectionComponent, contentSection);
    this.#renderFilmContainerContent(filmListSectionComponent, dataset, referenceModel, rootComponent);
  };
}
