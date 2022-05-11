import { render } from '../render';
import FilmDetailsControlView from '../view/popup/film-details-control-view';

export default class PopupFilmControlPresenter {

  init = (dataItem, contentSection) => {
    this.contentSection = contentSection;
    this.dataItem = dataItem;
    render(new FilmDetailsControlView(dataItem), this.contentSection);
  };
}
