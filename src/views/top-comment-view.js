import { html } from '../tools/safe-html.js';
import FilmListView from './film-list-view.js';

class TopCommentView extends FilmListView {
  constructor() {
    super();

    this.classList.add('films-list--extra');
  }

  /**
   * @override
   */
  render() {
    this.insertAdjacentHTML('afterbegin', String(this.createFilmListTitle()));
    this.insertAdjacentElement('beforeend',this.createFilmContainerView());
  }

  /**
   * @return {SafeHtml}
   */
  createFilmListTitle() {
    return html`<h2 class="films-list__title">Most commented</h2>`;
  }
}

customElements.define('top-comment-view', TopCommentView);

export default TopCommentView;

