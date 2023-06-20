import View from './view.js';
// import { html } from '../tools/safe-html.js';
import FilmCardView from './film-card-view.js';

/**
 * @extends {View<FilmListState>}
 */
class FilmContainerView extends View {
  constructor() {
    super();

    this.classList.add('films-list__container');
  }

  /**
   * @override
   */
  render() {
    const filmList = this.state.items;
    const views = filmList.map(this.createFilmCard);
    this.replaceChildren(...views);
  }

  // /**
  //  * @override
  //  */
  // createHtml() {
  //   return html`

  //   `;
  // }

  /**
   * @param {FilmState} state
   * @return {FilmCardView}
   */
  createFilmCard(state) {
    const view = new FilmCardView();
    view.state = state;
    view.render();

    return view;
  }
}

customElements.define('film-container-view', FilmContainerView);

export default FilmContainerView;

