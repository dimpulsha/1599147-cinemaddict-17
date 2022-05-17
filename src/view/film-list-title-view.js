import AbstractView from '../framework/view/abstract-view.js';
import { createElement } from '../framework/render';

const createFilmListHeaderTemplate = () => '<h2 class="films-list__title"></h2>';

export default class FilmListTitleView extends AbstractView {

  constructor(text, cssClass = null) {
    super();
    this.text = text;
    this.cssClass = cssClass;
  }

  #element = null;

  get template() {
    return createFilmListHeaderTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    if (this.cssClass) {
      this.#element.classList.add(this.cssClass);
    }
    this.#element.textContent = this.text;
    // console.log(this.#element);
    return this.#element;
  }
}
