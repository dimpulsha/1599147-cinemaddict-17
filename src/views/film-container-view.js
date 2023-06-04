import View from './view.js';
import { html } from '../tools/safe-html.js';
import FilmCardView from './film-card-view.js';


class FilmContainerView extends View {
  constructor() {
    super();

    this.classList.add('films-list__container');
  }

  /**
   * @override
   */

  render() {
    const views = new Array(4).fill().map(this.createFilmListItem);
    this.replaceChildren(...views);
  }

  /**
   * @override
   */
  createHtml() {
    return html`

    `;
  }

  /**
   * @param {*} state
   * @return {FilmCardView}
   */
  createFilmListItem(state) {
    const view = new FilmCardView;
    view.state = state;
    view.render();

    return view;
  }
}

customElements.define('film-container-view', FilmContainerView);

export default FilmContainerView;

