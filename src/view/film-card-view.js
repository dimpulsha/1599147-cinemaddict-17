import { createElement } from '../render';
import { getShortText, setActiveClass } from '../utils/utils';
import { getDescriptionLimit, getReplacedText } from '../config';

const createFilmControlTemplate = (filmItem) => {
  const activeClass = 'film-card__controls-item--active';
  return (` <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${setActiveClass(filmItem.userDetails.isWatchlist, activeClass)}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${setActiveClass(filmItem.userDetails.isWatched, activeClass)}" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite ${setActiveClass(filmItem.userDetails.isFavorite, activeClass)}}" type="button">Mark as favorite</button>
    </div>`);
};

const createFilmListTemplate = (filmItem) => (
  `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${filmItem.filmInfo.title}</h3>
      <p class="film-card__rating">${filmItem.filmInfo.totalRating}</p>
      <p class="film-card__info">
          <span class="film-card__year">${filmItem.filmInfo.release.releaseYear}</span>
          <span class="film-card__duration">${filmItem.filmInfo.runtime}</span>
          <span class="film-card__genre">${filmItem.filmInfo.genre.join(', ')}</span>
      </p>
      <img src="${filmItem.filmInfo.poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${getShortText(filmItem.filmInfo.description, getDescriptionLimit(), getReplacedText())}</p>
      <span class="film-card__comments">${filmItem.commentsNum} comments</span>
    </a>
    ${createFilmControlTemplate(filmItem)}
  </article>`
);

export default class FilmCardView {
  #element = null;

  constructor(filmItem) {
    this.filmItem = filmItem;
  }

  get template() {
    return createFilmListTemplate(this.filmItem);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
