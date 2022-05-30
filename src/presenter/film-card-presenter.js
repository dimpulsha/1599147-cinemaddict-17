import { render, replace, remove } from '../framework/render';
import FilmCardView from '../view/film-card-view';
import FilmPopupPresenter from './film-popup-presenter';

export default class FilmCardPresenter  {

  #filmListContainer = null;
  #filmCardComponent = null;
  #filmPopup = null;
  #rootPage = null;
  #filmItem = null;
  #referenceModel = null;
  #changeData = null;

  constructor(filmListContainer, rootPage, changeDataFunction) {
    this.#filmListContainer = filmListContainer;
    this.#rootPage = rootPage;
    this.#changeData = changeDataFunction;
  }

  init = (filmItem, referenceModel) => {
    this.#filmItem = filmItem;
    this.#referenceModel = referenceModel;

    const prevCardComponent = this.#filmCardComponent;

    this.#filmCardComponent = new FilmCardView(this.#filmItem);
    this.#filmPopup = new FilmPopupPresenter(this.#rootPage, this.#changeData);

    this.#filmCardComponent.setClickCardHandler(this. #handleFilmCardClick);
    this.#filmCardComponent.setClickFavoriteHandler(this.#handleFavoriteClick);
    this.#filmCardComponent.setClickWatchListHandler(this.#handleWatchListClick);
    this.#filmCardComponent.setClickWatchedHandler(this.#handleWatchedClick);

    if (prevCardComponent === null) {
      render(this.#filmCardComponent, this.#filmListContainer.element);
      return;
    }

    if (this.#filmListContainer.element.contains(prevCardComponent.element)) {
      replace(this.#filmCardComponent, prevCardComponent);
    }

    remove(prevCardComponent);
  };

  destroy = () => {
    remove(this.#filmCardComponent);
  };

  #removePopupDOM = () => {
    const openedPopupElement = this.#rootPage.openPopup;
    if (openedPopupElement) {
      openedPopupElement.remove();
    }
  };

  #popupRemove = () => {
    this.#filmPopup.destroy();
    this.#removePopupDOM();
    this.#rootPage.removeNoScroll();
    this.#rootPage.removeEscKeyDownHandler();
  };

  #onCloseButtonPopup = () => {
    this.#popupRemove();
  };

  #closePopup = () => {
    this.#removePopupDOM();
    this.#rootPage.removeEscKeyDownHandler();
    this.#rootPage.removeNoScroll();
  };

  #showPopup = () => {
    this.#closePopup();
    this.#rootPage.setNoScroll();
    this.#filmPopup.init(this.#filmItem, this.#referenceModel.getCommentsById(this.#filmItem.commentsList));
    this.#filmPopup.popupComponent.setCloseClickHandler(this.#onCloseButtonPopup);
  };

  #handleEscKeyDown = () => {
    this.#popupRemove();
  };

   #handleFilmCardClick = () => {
    this.#showPopup();
    this.#rootPage.setEscKeyDownHandler(this.#handleEscKeyDown);
  };

  #handleFavoriteClick = () => {
    this.#filmItem.userDetails.isFavorite = !this.#filmItem.userDetails.isFavorite;
    this.#changeData(this.#filmItem);
  };

  #handleWatchListClick = () => {
    this.#filmItem.userDetails.isWatchlist = !this.#filmItem.userDetails.isWatchlist;
    this.#changeData(this.#filmItem);
  };

  #handleWatchedClick = () => {
    this.#filmItem.userDetails.isWatched = !this.#filmItem.userDetails.isWatched;
    this.#changeData(this.#filmItem);
  };

}

