import { render } from '../framework/render.js';
import { getCommentsDataTemplate } from '../config';
import FilmNewCommentsView from '../view/popup/film-new-comments-view';

export default class PopupNewCommentsPresenter {

  #filmNewCommentsComponent = null;
  #newComment = null;

  init = (contentSection) => {
    this.#newComment = getCommentsDataTemplate();
    this.contentSection = contentSection;
    this.#filmNewCommentsComponent = new FilmNewCommentsView(this.#newComment);
    render( this.#filmNewCommentsComponent, this.contentSection);
  };
}
