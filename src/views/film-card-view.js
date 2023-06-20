import View from './view.js';
import {html} from '../tools/safe-html.js';
import { getRandomItem } from '../tools/utils.js';


/**
 * @extends {View<FilmState>}
 */
class FilmCardView extends View {
  constructor() {
    super();

    this.classList.add('film-card');
    this.setAttribute('role', 'article');

  }

  /**
   * @override
   */
  createHtml() {
    return html`
        ${this.createFilmInfo()}
        ${this.createFilmControl()}
    `;
  }

  createFilmInfo() {
    const filmCard = this.state;
    // console.log(filmCard.title);
    return html`
      <a class="film-card__link">
        <h3 class="film-card__title">${filmCard.title}</h3>
        <p class="film-card__rating">${filmCard.totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${filmCard.releaseDate}</span>
          <span class="film-card__duration">${filmCard.runtime}</span>
          <span class="film-card__genre">${getRandomItem(filmCard.genre)}</span>
        </p>
        <img src="${filmCard.poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${filmCard.briefDescription}</p>
        <span class="film-card__comments">${filmCard.commentsCount} comments</span>
      </a>
    `;
  }

  createFilmControl() {
    return html`
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    `;
  }

}

customElements.define('film-card-view', FilmCardView);

export default FilmCardView;

