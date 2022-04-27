import { createElement } from '../../render';

export default class FilmControlItemView {

  constructor(template) {
    this.template = template;
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.template);
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
