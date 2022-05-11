import { render } from '../render';
import FilmCommentsListView from '../view/popup/film-comments-list-view';

export default class PopupFilmCommentsPresenter {

  init = (dataList, contentSection) => {
    this.contentSection = contentSection;
    this.dataList = dataList;
    render(new FilmCommentsListView(this.dataList), this.contentSection);
  };
}
