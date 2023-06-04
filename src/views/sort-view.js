import View from './view.js';
import {html} from '../tools/safe-html.js';

class SortView extends View {
  constructor() {
    super();

    this.classList.add('sort-view');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <ul class="sort">
        <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
        <li><a href="#" class="sort__button">Sort by date</a></li>
        <li><a href="#" class="sort__button">Sort by rating</a></li>
      </ul>
    `;
  }
}

customElements.define('sort-view', SortView);

export default SortView;

