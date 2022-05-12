import { createElement } from '../render';

export default class ContainerView {

  #element = null;

  constructor(template) {
    this.template = template;
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

