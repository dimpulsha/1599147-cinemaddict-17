import {render} from '../framework/render.js';
import PopupView from '../view/popup/popup-view';
import FilmDetailsView from '../view/popup/film-details-view';
import FilmDetailsControlView from '../view/popup/film-details-control-view';
import PopupFilmCommentsPresenter from './film-details-comments-presenter';
import PopupNewCommentsPresenter from './film-new-comments-presenter';

export default class FilmPopupPresenter {

  #popupComponent = new PopupView();

  #filmComments = new PopupFilmCommentsPresenter();
  #filmNewComments = new PopupNewCommentsPresenter();

  init = (contentSection, dataItem, commentsList) => {
    this.dataItem = dataItem;
    this.commentsList = commentsList;
    const filmDetailsComponent = new FilmDetailsView(dataItem);
    const filmDetailsControlComponent = new FilmDetailsControlView(dataItem);

    render(this.#popupComponent, contentSection);
    render(filmDetailsComponent, this.#popupComponent.filmInfoElement);
    render(filmDetailsControlComponent, this.#popupComponent.filmInfoElement);
    this.#filmComments.init(this.commentsList, this.#popupComponent.commentsElement);
    this.#filmNewComments.init(this.#popupComponent.commentsElement);
  };

  remove = () => {
    this.#popupComponent.element.remove();
    this.#popupComponent.removeElement();
  };

  get popupComponent() {
    return this.#popupComponent;
  }
}
