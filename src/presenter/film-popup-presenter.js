import {render} from './framework/render.js';
import PopupView from '../view/popup/popup-view';
import PopupFilmDetailsPresenter from './popup-film-details-presenter';
import PopupFilmControlPresenter from './film-details-control-presenter';
import PopupFilmCommentsPresenter from './film-details-comments-presenter';
import PopupNewCommentsPresenter from './film-new-comments-presenter';

export default class FilmPopupPresenter {

  #popupComponent = new PopupView();

  #filmDetails = new PopupFilmDetailsPresenter();
  #filmDetailsControl = new PopupFilmControlPresenter();
  #filmComments = new PopupFilmCommentsPresenter();
  #filmNewComments = new PopupNewCommentsPresenter();

  init = (contentSection, dataItem, commentsList) => {
    this.dataItem = dataItem;
    this.commentsList = commentsList;

    render(this.#popupComponent, contentSection);
    this.#filmDetails.init(this.dataItem, this.#popupComponent.filmInfoElement);
    this.#filmDetailsControl.init(this.dataItem, this.#popupComponent.filmInfoElement);
    this.#filmComments.init(this.commentsList, this.#popupComponent.commentsElement);
    this.#filmNewComments.init(this.#popupComponent.commentsElement);
  };

  remove = () => {
    this.#popupComponent.element.remove();
    this.#popupComponent.removeElement();
  };

  get popupCloseElement() {
    return this.#popupComponent.element.querySelector('.film-details__close-btn');
  }
}
