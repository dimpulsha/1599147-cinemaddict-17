import AbstractView from '../../framework/view/abstract-view.js';
import { setActiveClass } from '../../utils/utils';

const createPopupFilmControlTemplate = (filmItem) => {
  const activeClass = 'film-details__control-button--active';
  return (`<section class="film-details__controls">
        <button type="button" class="film-details__control-button film-details__control-button--watchlist ${setActiveClass(filmItem.userDetails.isWatchlist, activeClass)}" id="watchlist" name="watchlist">Add to watchlist</button>
        <button type="button" class="film-details__control-button film-details__control-button--watched ${setActiveClass(filmItem.userDetails.isWatched, activeClass)}" id="watched" name="watched">Already watched</button>
        <button type="button" class="film-details__control-button film-details__control-button--favorite ${setActiveClass(filmItem.userDetails.isFavorite, activeClass)}" id="favorite" name="favorite">Add to favorites</button>
      </section>`
  );
};

export default class FilmDetailsControlView extends AbstractView{

  constructor(filmItem) {
    super();
    this.filmItem = filmItem;
  }

  get template() {
    return createPopupFilmControlTemplate(this.filmItem);
  }

  setClickDetailsFavoriteHandler = (callback) => {
    this._callback.favoriteDetailsClick = callback;
    this.element.querySelector('#favorite').addEventListener('click', this.#clickDetailsFavoriteHandler);
  };

  #clickDetailsFavoriteHandler = (evt) => {
    evt.preventDefault();
    this._callback.favoriteDetailsClick();
  };

  setClickDetailsWatchListHandler = (callback) => {
    this._callback.watchListDetailsClick = callback;
    this.element.querySelector('#watchlist').addEventListener('click', this.#clickDetailsWatchListHandler);
  };

  #clickDetailsWatchListHandler = (evt) => {
    evt.preventDefault();
    this._callback.watchListDetailsClick();
  };

  setClickDetailsWatchedHandler = (callback) => {
    this._callback.watchedDetailsClick = callback;
    this.element.querySelector('#watched').addEventListener('click', this.#clickDetailsWatchedHandler);
  };

  #clickDetailsWatchedHandler = (evt) => {
    evt.preventDefault();
    this._callback.watchedDetailsClick();
  };

}
