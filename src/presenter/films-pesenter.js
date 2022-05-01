import { render } from '../render';
import { getContainerTemplates } from './container-template';

import ContainerView from '../view/container-view';
import FilmListPresenter from './film-list-presenter';
import TopFilmPresenter from './top-film-presenter';
import CommentedFilmPresenter from './commented-film-presenter';


export default class FilmsPresenter {
// constructor ()
  siteContainers = getContainerTemplates();
  contentWrapper = new ContainerView(this.siteContainers.contentSection);
  filmList = new FilmListPresenter();
  topFilmList = new TopFilmPresenter();
  commentedFilmList = new CommentedFilmPresenter();

  init = (contentSection) => {
    this.contentSection = contentSection;
    render(this.contentWrapper, this.contentSection);
    this.filmList.init(this.contentWrapper.getElement());
    this.topFilmList.init(this.contentWrapper.getElement());
    this.commentedFilmList.init(this.contentWrapper.getElement());
  };
}
