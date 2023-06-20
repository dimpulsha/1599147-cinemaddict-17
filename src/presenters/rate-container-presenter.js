import { getShortText } from '../tools/utils.js';
import Presenter from './presenter.js';

/**
 * @extends {Presenter<RateContainerView, FilmModel>}
 */
class RateContainerPresenter extends Presenter {
  /**
   * @override
   * @return {FilmListState}
   */
  createViewState() {
    //TODO надо получать отфильтрованные
    // надо обрабатывать, когда списка нет
    // количество для обрезки надо получать в параметрах
    const modelFilmList = this.model.getFilmList();
    const items = modelFilmList.slice(0, 2).map((item) => this.createFilmCardState(item));
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

export default RateContainerPresenter;

