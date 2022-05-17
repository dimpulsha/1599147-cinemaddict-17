import AbstractView from '../../framework/view/abstract-view.js';
import { setActiveClass } from '../../utils/utils';

const createPopupFilmControlTemplate = (filmItem) => {
  const activeClass = 'film-details__control-button--active';
  return (`<section class="film-details__controls">
        <button type="button" class="film-details__control-button film-details__control-button--watchlist ${setActiveClass(filmItem.userDetails.isWatchlist, activeClass)}" id="watchlist" name="watchlist">Add to watchlist</button>
        <button type="button" class="film-details__control-button film-details__control-button--watched ${setActiveClass(filmItem.userDetails.isWatched, activeClass)}" id="watched" name="watched">Already watched</button>
        <button type="button" class="film-details__control-button film-details__control-button--favorite ${setActiveClass(filmItem.userDetails.isFavorite, activeClass)}}" id="favorite" name="favorite">Add to favorites</button>
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
}
