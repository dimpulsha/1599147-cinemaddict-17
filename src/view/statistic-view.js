// import { createElement } from '../render';
import AbstractView from '../framework/view/abstract-view.js';

const createFilmListTemplate = (count) => `<p> ${count} movies inside</p>`;

export default class  StatisticView extends AbstractView {
  constructor(count) {
    super();
    this.count = count;
  }

  get template() {
    return createFilmListTemplate(this.count);
  }
}
