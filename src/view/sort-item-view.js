import { createElement } from '../render';

export default class SortItemView {
  // getTemplate() {
  //   return getNavContainerTemplate();
  // }

  constructor(template = '<li><a href="#"</a></li>') {
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
