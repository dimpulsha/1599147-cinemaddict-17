import { render } from '../render';
import { getCommentedFilmSlice } from '../config';
import { getContainerTemplates, getFilmSectionTemplates } from './container-template';
import ContainerView from '../view/container-view';
import FilmListView from '../view/film-list-view';
import FilmCardView from '../view/film-card-view';

export default class CommentedFilmPresenter {
  #siteContainers = getContainerTemplates();
  #filmSectionTemplates = getFilmSectionTemplates();
  #commentedFilmsComponent = new FilmListView(this.#filmSectionTemplates.commentList);
  #commentedFilmsContainerComponent = new ContainerView(this.#siteContainers.filmListContainer);

  init = (contentSection, dataSet) => {
    this.contentSection = contentSection;
    this.dataSet = dataSet;
    render(this.#commentedFilmsComponent, this.contentSection);
    render(this. #commentedFilmsContainerComponent, this.#commentedFilmsComponent.element);

    this.dataSet.slice(0, getCommentedFilmSlice()).forEach((element) => {
      render(new FilmCardView(element),this.#commentedFilmsContainerComponent.element); });
  };
}

