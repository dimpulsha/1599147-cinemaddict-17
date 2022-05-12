import { render } from '../render';
import { getTopFilmSlice } from '../config';
import { getContainerTemplates, getFilmSectionTemplates } from './container-template';
import ContainerView from '../view/container-view';
import FilmListView from '../view/film-list-view';
import FilmCardView from '../view/film-card-view';

export default class TopFilmPresenter {
  #siteContainers = getContainerTemplates();
  #filmSectionTemplates = getFilmSectionTemplates();
  // todo - логику отрисовки сделать - если данных нет, то секция не рисуется
  #topFilmsComponent = new FilmListView(this.#filmSectionTemplates.topList);
  #topFilmsContainerComponent = new ContainerView(this.#siteContainers.filmListContainer);

  init = (contentSection, dataSet) => {
    this.contentSection = contentSection;
    this.dataSet = dataSet;
    render(this.#topFilmsComponent, this.contentSection);
    render(this.#topFilmsContainerComponent, this.#topFilmsComponent.element);

    this.dataSet.slice(0, getTopFilmSlice()).forEach((element) => {
      render(new FilmCardView(element), this.#topFilmsContainerComponent.element); });
  };
}
