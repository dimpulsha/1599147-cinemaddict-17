import View from './view.js';
import { html } from '../tools/safe-html.js';
import './film-list-tittle-view.css';

class FilmListTittleView extends View {

  constructor() {
    super();
    this.classList.add('flim-list-title');
  }

  /**
   * @override
   */
  createHtml() {
    return html`<h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>`;
  }
}

customElements.define('film-list-tittle-view', FilmListTittleView);

export default FilmListTittleView;

