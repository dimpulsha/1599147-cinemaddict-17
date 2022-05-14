import {render} from './framework/render.js';
import FilmDetailsView from '../view/popup/film-details-view';

export default class PopupFilmDetailsPresenter {

  init = (dataItem, contentSection) => {
    this.contentSection = contentSection;
    this.dataItem = dataItem;
    render(new FilmDetailsView(dataItem), this.contentSection);
  };
}

