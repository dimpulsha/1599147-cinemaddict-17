import { createElement } from '../render';

// const createFilmListTemplate = () => '<section class="films-list"> <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2> </section>';
// todo кандидат на объединение с ContainerView

export default class FilmListView {

  #element = null;

  constructor(template) {
    this.template = template;
  }

  // get template() {
  //   return createFilmListTemplate();
  // }

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
