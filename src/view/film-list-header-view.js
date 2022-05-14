import { createElement } from '../render';
// import { getFilmListHeaders } from '../presenter/container-template';

const createFilmListHeaderTemplate = () => '<h2 class="films-list__title"></h2>';

export default class FilmListView {

  #element = null;
  // #headerText = getFilmListHeaders();

  // constructor(context = 'NOTEMPTY') {
  //   // this.template = template;
  //   this.context = context;
  // }

  get template() {
    return createFilmListHeaderTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
      // this.#element.textContent(this.#headerText.context);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }

  // #createTemplate = () => {
  //   const template = createFilmListHeaderTemplate();
  // };

}
