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

  _renderFilmList = (contentSection, dataset, referenceDataModel, startIndex, stopIndex) => {
    // const filmListContainer = new ContainerView('filmListContainer');
    render(this.#filmListContainer, contentSection);
    this._renderFilmsSlice(this.#filmListContainer, dataset, referenceDataModel, startIndex, stopIndex);

    if (dataset.length > this.#filmSliceCount) {
      render(this.#showMoreComponent, contentSection);
      this.#showMoreComponent.element.addEventListener('click', this.#handleShowMoreClick(dataset) );
    }
  };

  #handleShowMoreClick = (dataset) => (evt) => {
    evt.preventDefault();
    this.#renderStartIndex =+ this.#renderFilmCount;
    this.#renderFilmCount = this.#renderFilmCount + this.#filmSliceCount;
    this._renderFilmsSlice(this.#filmListContainer, dataset, this.referenceDataModel, this.#renderStartIndex,  this.#renderFilmCount);

    if (dataset.length < this.#renderFilmCount) {
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

  #renderFilmContainerContent = (contentSection, dataset, referenceModel) => {
    //  пока заглушка
    const filterKind = null;
    if (dataset.length === 0) {
      this.#renderFilmListTitle(contentSection.element, filterKind);
      return;
    }
    this.#renderFilmListTitle(contentSection.element, filterKind);
    this._renderFilmList(contentSection.element, dataset, referenceModel, this.#renderStartIndex, this.#filmSliceCount);
  };


  init = (contentSection, dataset, referenceModel) => {
    const filmListSectionComponent = new ContainerView(this.#sectionConfig.sectionName);
    render(filmListSectionComponent, contentSection);
    this.#renderFilmContainerContent(filmListSectionComponent, dataset, referenceModel);
  };
}
