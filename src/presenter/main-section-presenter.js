import { render } from '../framework/render.js';
// import NavigationPresenter from './navigation-presenter';
import FilterView from '../view/filter-view';
import SortView from '../view/sort-view';
import ContainerView from '../view/container-view';
import FilmsList from './films-list-presenter';
import AllFilmsList from './all-films-presenter.js';

// перечень фильмов
// топфильмы
// комментируемые фильмы

export default class MainSectionPresenter {
  #sortComponent = new SortView();
  #filterComponent = new FilterView();
  #filmsSection = new ContainerView('filmsSection');
  // #filmsListAllSection = new FilmsList('ALL');
  #filmsListAllSection = new AllFilmsList('ALL');
  #filmsListTopSection = new FilmsList('TOP');
  #filmsListCommentedSection = new FilmsList('COMMENTED');


  init = (contentSection, dataModel, referenceDataModel) => {
    this.contentSection = contentSection;
    this.dataModel = dataModel;
    this.referenceDataModel = referenceDataModel;
    this.filmsList = this.dataModel.films;

    render(this.#filterComponent, this.contentSection);
    render(this.#sortComponent, this.contentSection);
    render(this.#filmsSection, this.contentSection);
    this.#filmsListAllSection.init(this.#filmsSection.element, this.filmsList, referenceDataModel);
    this.#filmsListTopSection.init(this.#filmsSection.element, this.filmsList, referenceDataModel);
    this. #filmsListCommentedSection.init(this.#filmsSection.element, this.filmsList, referenceDataModel);
  };
}
