import {render} from '../framework/render.js';
import StatisticView from '../view/statistic-view';

export default class StatisticPresenter {

  init = (contentSection, dataModel) => {
    this.contentSection = contentSection;
    this.dataModel = dataModel;
    const filmsNum = this.dataModel.films.length;
    render(new StatisticView(filmsNum),  this.contentSection);
  };
}
