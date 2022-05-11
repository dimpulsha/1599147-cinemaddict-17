import { createElement } from '../../render';

const createFilmListTemplate = () => (
  `<section class="film-details">
  <form class="film-details__inner" action="" method="get">

  </form>
  </section>`
);

export default class PopupView {
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
