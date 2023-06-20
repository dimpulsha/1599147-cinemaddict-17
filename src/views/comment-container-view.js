// import View from './view.js';
// import {html} from '../tools/safe-html.js';
import FilmCardView from './film-card-view.js';
import FilmContainerView from './film-container-view';

class CommentContainerView extends FilmContainerView {
  constructor() {
    super();

  //   this.classList.add('comment-container-view');
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

customElements.define('comment-container-view', CommentContainerView);

export default CommentContainerView;

