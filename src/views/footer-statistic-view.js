import View from './view.js';
import {html} from '../tools/safe-html.js';

class FooterStatisticView extends View {

  /**
   * @override
   */
  createHtml() {
    return html`
      <p>130 291 movies inside</p>
    `;
  }
}

customElements.define('footer-statistic-view', FooterStatisticView);

export default FooterStatisticView;

