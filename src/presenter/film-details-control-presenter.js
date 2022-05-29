import {render, remove, replace} from '../framework/render.js';
import FilmDetailsControlView from '../view/popup/film-details-control-view';

export default class FilmDetailsControlPresenter {

  #detailsControlComponent = null;
  #filmItem = null;
  #popupContainer = null;
  #changeDetailsData = null;

  constructor(popupContainer, changeDataFunction) {
    this.#popupContainer = popupContainer;
    this.#changeDetailsData = changeDataFunction;
  }

  init = (filmItem) => {
    this.#filmItem = filmItem;
    const prevDetailsControlComponent = this.#detailsControlComponent;
    this.#detailsControlComponent = new FilmDetailsControlView(this.#filmItem);
    this.#detailsControlComponent.setClickDetailsFavoriteHandler(this.#handleFavoriteClick);
    this.#detailsControlComponent.setClickDetailsWatchListHandler(this.#handleWatchListClick);
    this.#detailsControlComponent.setClickDetailsWatchedHandler(this.#handleWatchedClick);

    if (prevDetailsControlComponent === null) {
      render(this.#detailsControlComponent, this.#popupContainer);
      return;
    }

    if (this.#popupContainer.contains(prevDetailsControlComponent.element)) {
      replace(this.#detailsControlComponent, prevDetailsControlComponent);
    }
    remove(prevDetailsControlComponent);
  };

  #handleFavoriteClick = () => {
    this.#filmItem.userDetails.isFavorite = !this.#filmItem.userDetails.isFavorite;
    this.#changeDetailsData(this.#filmItem);
  };

  #handleWatchListClick = () => {
    this.#filmItem.userDetails.isWatchlist = !this.#filmItem.userDetails.isWatchlist;
    this.#changeDetailsData(this.#filmItem);
  };

  #handleWatchedClick = () => {
    this.#filmItem.userDetails.isWatched = !this.#filmItem.userDetails.isWatched;
    this.#changeDetailsData(this.#filmItem);
  };
}

