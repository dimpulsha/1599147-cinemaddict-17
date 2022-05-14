import {render} from './framework/render.js';
import StatisticView from '../view/statistic-view';

export default class StatisticPresenter {

  init = (contentSection) => {
    this.contentSection = contentSection;
    render(new StatisticView(),  this.contentSection);
  };
}
