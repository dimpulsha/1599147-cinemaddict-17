import { render } from '../framework/render.js';
import { getSortType } from '../config';
import FilterView from '../view/filter-view';
import SortView from '../view/sort-view';
import ContainerView from '../view/container-view';
import FilmsList from './films-list-presenter';
import AllFilmsList from './all-films-presenter.js';

export default class MainSectionPresenter {
  #sortTypes = getSortType();
  #sortComponent = new SortView();

  #filmsSectionComponent = null;
  #filmsListAllSection = null;
  #filmsListTopSection = null;
  #filmsListCommentedSection = null;

  #filterComponent = null;
  #currentSortType = this.#sortTypes.DEFAULT;

  #renderSort = () => {
    render(this.#sortComponent, this.contentSection);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
  };

  #renderFilter = () => {
    render(this.#filterComponent, this.contentSection);
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#filmsListAllSection.sortFilms(sortType);
    this.#currentSortType = sortType;
  };

  init = (contentSection, dataModel, referenceDataModel, rootComponent) => {
    this.contentSection = contentSection;
    this.dataModel = dataModel;
    this.referenceDataModel = referenceDataModel;
    this.filmsList = this.dataModel.films;
    const filters = this.dataModel.generateFilter();
    this.#filterComponent = new FilterView(filters);
    this.#filmsSectionComponent = new ContainerView('filmsSection');
    this.#filmsListAllSection = new AllFilmsList(this.dataModel);
    this.#filmsListTopSection = new FilmsList('TOP');
    this.#filmsListCommentedSection = new FilmsList('COMMENTED');

    this.#renderFilter();
    this.#renderSort();
    render(this.#filmsSectionComponent, this.contentSection);
    this.#filmsListAllSection.init(this.#filmsSectionComponent.element, referenceDataModel, rootComponent);
    this.#filmsListTopSection.init(this.#filmsSectionComponent.element, this.filmsList, referenceDataModel, rootComponent);
    this. #filmsListCommentedSection.init(this.#filmsSectionComponent.element, this.filmsList, referenceDataModel, rootComponent);
  };
}
