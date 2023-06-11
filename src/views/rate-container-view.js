// import { html } from '../tools/safe-html.js';
import FilmContainerView from './film-container-view';

class RateContainerView extends FilmContainerView {
  constructor() {
    super();

    // this.classList.add('rate-container-view');
  }

  // /**
  //  * @override
  //  */
  // createHtml() {
  //   return html`

  //   `;
  // }


  /**
   * @override
   */
  render() {
    const views = new Array(4).fill().map(this.createFilmCard);
    this.replaceChildren(...views);
  }

}

customElements.define('rate-container-view', RateContainerView);

export default RateContainerView;

