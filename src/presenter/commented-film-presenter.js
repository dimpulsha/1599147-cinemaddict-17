import { render } from '../render';
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

  init = (contentSection) => {
    this.contentSection = contentSection;
    render(this.commentedFilmList, this.contentSection);
    render(this.commentedFilmListContainer, this.commentedFilmList.getElement());

    for (let i = 0; i < this.cardLimit; i++) {
      render(new FilmCardView(), this.commentedFilmListContainer.getElement());
    }
  };
}

