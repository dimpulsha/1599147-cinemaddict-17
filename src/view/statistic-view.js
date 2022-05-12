import { createElement } from '../render';

const createFilmListTemplate = () => ' <p>130 291 movies inside</p>';

export default class StatisticView {
  #element = null;

  get template() {
    return createFilmListTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
