import { createElement } from '../render';

export default class NavigationItemView {
  // getTemplate() {
  //   return getNavContainerTemplate();
  // }

  constructor(template = '<a href="#"><a/>') {
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
