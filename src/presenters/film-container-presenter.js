import Presenter from './presenter.js';
import { getShortText } from '../tools/utils.js';

/**
 * @extends {Presenter<FilmContainerView, FilmModel>}
 */
class FilmContainerPresenter extends Presenter {
  /**
   * @override
   * @return {FilmListState}
   */
  createViewState() {
    const modelFilmList = this.model.getFilmList();
    const items = modelFilmList.map((item) => this.createFilmCardState(item));
    // console.log(items);
    return { items };
  }

  /**
   * @param {FilmItem} item
   * @return {FilmState}
   */
  createFilmCardState(item) {

    return {
      ...item,
      briefDescription: getShortText(item.description, 130, '...'),
      commentsCount: item.commentsIds.length
    };

  }
}

export default FilmContainerPresenter;

