import {render, remove} from '../framework/render.js';
import PopupView from '../view/popup/popup-view';
import FilmDetailsView from '../view/popup/film-details-view';
import FilmDetailsControlPresenter from './film-details-control-presenter.js';
import PopupFilmCommentsPresenter from './film-details-comments-presenter';
import PopupNewCommentsPresenter from './film-new-comments-presenter';

export default class FilmPopupPresenter {

  #popupContainer = null;
  #popupComponent = null;
  #filmComments = null;
  #filmNewComments = null;
  #filmDetailsControl = null;
  #filmItem = null;
  #changeGlobalData = null;

  constructor(popupContainer, changeGlobalData) {
    this.#popupContainer = popupContainer;
    this.#changeGlobalData = changeGlobalData;
  }

  init = (dataItem, commentsList) => {

    this.#popupComponent = new PopupView();
    this.#filmComments = new PopupFilmCommentsPresenter();
    this.#filmNewComments = new PopupNewCommentsPresenter();

    this.#filmItem = dataItem;
    this.commentsList = commentsList;
    this.#filmDetailsControl = new FilmDetailsControlPresenter(this.#popupComponent.filmInfoElement, this.#changeDetailsData);
    const filmDetailsComponent = new FilmDetailsView(this.#filmItem);

    render(this.#popupComponent, this.#popupContainer.element);
    render(filmDetailsComponent, this.#popupComponent.filmInfoElement);

    this.#filmDetailsControl.init(this.#filmItem);
    this.#filmComments.init(this.commentsList, this.#popupComponent.commentsElement);
    this.#filmNewComments.init(this.#popupComponent.commentsElement);
  };

  destroy = () => {
    remove(this.#popupComponent);
  };

  get popupComponent() {
    return this.#popupComponent;
  }

  #changeDetailsData = (updatedCard) => {
    this.#filmDetailsControl.init(updatedCard);
    this.#changeGlobalData(updatedCard);
  };

}
