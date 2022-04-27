import { createElement } from '../../render';

const createFilmListTemplate = () => (
  `<form class="film-details__inner" action="" method="get">
     <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
      </div>
    <div class="film-details__bottom-container">
    </div>
  </form>`
);

export default class FilmDetailsFormView {
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
