import View from './view.js';
import { html } from '../tools/safe-html.js';
import FilmContainerView from './film-container-view.js';
import './film-list-view.css';

class FilmListView extends View {
  constructor() {
    super();

    this.classList.add('films-list');
  }

  /**
   * @override
   */
  render() {
    this.insertAdjacentHTML('afterbegin', String(this.createFilmListTitle()));
    this.insertAdjacentElement('beforeend',this.createFilmContainerView());
    this.insertAdjacentHTML('beforeend', String(this.createShowMoreButton()));
  }

  /**
   * @return {SafeHtml}
   */
  createFilmListTitle() {
    return html`<h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>`;
  }

  /**
   * @param {*} state
   * @return {FilmContainerView}
   */
  createFilmContainerView(state) {
    const view = new FilmContainerView;
    view.state = state;
    view.render();
    return view;
  }

  createShowMoreButton() {
    return html` <button class="films-list__show-more">Show more</button>`;
  }
}

customElements.define('film-list-view', FilmListView);

export default FilmListView;

