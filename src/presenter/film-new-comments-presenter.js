import {render} from '../framework/render.js';
import FilmNewCommentsView from '../view/popup/film-new-comments-view';
// нужен ли этот презентер?
export default class PopupNewCommentsPresenter {

  init = (contentSection) => {
    this.contentSection = contentSection;
    render(new FilmNewCommentsView(), this.contentSection);
  };
}
