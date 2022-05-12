import { render } from '../render';
import FilmNewCommentsView from '../view/popup/film-new-comments-view';

export default class PopupNewCommentsPresenter {

  init = (contentSection) => {
    this.contentSection = contentSection;
    render(new FilmNewCommentsView(), this.contentSection);
  };
}
