import { createElement } from '../render';

const createFilmListTemplate = () => ' <p>130 291 movies inside</p>';

export default class StatisticView {
  getTemplate() {
    return createFilmListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
