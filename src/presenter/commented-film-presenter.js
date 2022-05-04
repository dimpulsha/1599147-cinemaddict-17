import { render } from '../render';
import { getCommentedFilmSlice } from '../config';
import { getContainerTemplates, getFilmSectionTemplates } from './container-template';
import ContainerView from '../view/container-view';
import FilmListView from '../view/film-list-view';
import FilmCardView from '../view/film-card-view';

export default class CommentedFilmPresenter {
  cardLimit = 2;
  siteContainers = getContainerTemplates();
  filmSectionTemplates = getFilmSectionTemplates();
  commentedFilmList = new FilmListView(this.filmSectionTemplates.commentList);
  commentedFilmListContainer = new ContainerView(this.siteContainers.filmListContainer);

  init = (contentSection, filmsData) => {
    this.contentSection = contentSection;
    this.filmsData = filmsData;
    render(this.commentedFilmList, this.contentSection);
    render(this.commentedFilmListContainer, this.commentedFilmList.getElement());

    // for (let i = 0; i < this.cardLimit; i++) {
    //   render(new FilmCardView(), this.commentedFilmListContainer.getElement());
    // }
    this.filmsData.slice(0, getCommentedFilmSlice()).forEach((element) => {
      render(new FilmCardView(element),this.commentedFilmListContainer.getElement()); });
  };
}

