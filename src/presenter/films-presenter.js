import { render } from '../render';
import { getContainerTemplates } from './container-template';

import ContainerView from '../view/container-view';
import FilmListPresenter from './film-list-presenter';
import TopFilmPresenter from './top-film-presenter';
import CommentedFilmPresenter from './commented-film-presenter';


export default class FilmsPresenter {

  #siteContainers = getContainerTemplates();
  #filmsComponent = new ContainerView(this.#siteContainers.contentSection);
  #filmList = new FilmListPresenter();
  #topFilms = new TopFilmPresenter();
  #commentedFilms = new CommentedFilmPresenter();

  init = (contentSection, dataModel, referenceDataModel) => {
    this.contentSection = contentSection;
    this.filmsData = dataModel.films;
    render(this.#filmsComponent, this.contentSection);
    this.#filmList.init(this.#filmsComponent.element, this.filmsData, referenceDataModel);
    this.#topFilms.init(this.#filmsComponent.element, this.filmsData);
    this.#commentedFilms.init(this.#filmsComponent.element, this.filmsData);
  };
}
