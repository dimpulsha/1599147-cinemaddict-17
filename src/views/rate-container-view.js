// import { html } from '../tools/safe-html.js';
import FilmContainerView from './film-container-view';
import FilmCardView from './film-card-view.js';

class RateContainerView extends FilmContainerView {
  constructor() {
    super();

    // this.classList.add('rate-container-view');
  }

  /**
   * @override
   */
  render() {
    const filmList = this.state.items;
    const views = filmList.map(this.createFilmCard);
    this.replaceChildren(...views);
  }

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

customElements.define('rate-container-view', RateContainerView);

export default RateContainerView;

