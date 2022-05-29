import { render } from '../framework/render.js';
import FilterView from '../view/filter-view';
import SortView from '../view/sort-view';
import ContainerView from '../view/container-view';
import FilmsList from './films-list-presenter';
import AllFilmsList from './all-films-presenter.js';

export default class MainSectionPresenter {
  #sortComponent = new SortView();

  #filmsSectionComponent = new ContainerView('filmsSection');
  #filmsListAllSection = new AllFilmsList('ALL');
  #filmsListTopSection = new FilmsList('TOP');
  #filmsListCommentedSection = new FilmsList('COMMENTED');

  #filterComponent = null;

  #renderSort = () => {
    render(this.#sortComponent, this.contentSection);
  };

  #renderFilter = () => {
    render(this.#filterComponent, this.contentSection);
  };

  init = (contentSection, dataModel, referenceDataModel, rootComponent) => {
    this.contentSection = contentSection;
    this.dataModel = dataModel;
    this.referenceDataModel = referenceDataModel;
    this.filmsList = this.dataModel.films;
    const filters = this.dataModel.generateFilter();
    this.#filterComponent = new FilterView(filters);

    this.#renderFilter();
    this.#renderSort();
    render(this.#filmsSectionComponent, this.contentSection);
    this.#filmsListAllSection.init(this.#filmsSectionComponent.element, this.filmsList, referenceDataModel, rootComponent);
    this.#filmsListTopSection.init(this.#filmsSectionComponent.element, this.filmsList, referenceDataModel, rootComponent);
    this. #filmsListCommentedSection.init(this.#filmsSectionComponent.element, this.filmsList, referenceDataModel, rootComponent);
  };
}
