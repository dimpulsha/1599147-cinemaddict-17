import AbstractView from '../framework/view/abstract-view.js';

import { setActiveClass } from '../utils/utils';

const createFilmControlTemplate = (filmItem) => {
  const activeClass = 'film-card__controls-item--active';
  return (` <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${setActiveClass(filmItem.userDetails.isWatchlist, activeClass)}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${setActiveClass(filmItem.userDetails.isWatched, activeClass)}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${setActiveClass(filmItem.userDetails.isFavorite, activeClass)}}" type="button">Mark as favorite</button>
    </div>`);
};

export default class FilmCardControlView extends AbstractView{

  constructor(filmItem) {
    super();
    this.filmItem = filmItem;
  }

  get template() {
    return createFilmControlTemplate(this.filmItem);
  }

}
