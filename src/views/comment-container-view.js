// import View from './view.js';
// import {html} from '../tools/safe-html.js';

import FilmContainerView from './film-container-view';

class CommentContainerView extends FilmContainerView {
  // constructor() {
  //   super();

  //   this.classList.add('comment-container-view');
  // }

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

customElements.define('comment-container-view', CommentContainerView);

export default CommentContainerView;

