import View from './view.js';
import {html} from '../tools/safe-html.js';

class ShowMoreView extends View {
  // constructor() {
  //   super();

  //   this.classList.add('show-more-view');
  // }

  /**
   * @override
   */
  createHtml() {
    return html` <button class="films-list__show-more">Show more</button>`;
  }
}

customElements.define('show-more-view', ShowMoreView);

export default ShowMoreView;

