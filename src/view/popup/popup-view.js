import AbstractView from '../../framework/view/abstract-view.js';

const createFilmListTemplate = () => (
  `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
  <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
    </div>
    <div class="film-details__bottom-container">
    </div>
  </form>
  </section>`
);

export default class PopupView extends AbstractView{
  // #element = null;

  get template() {
    return createFilmListTemplate();
  }

  // get element() {
  //   if (!this.#element) {
  //     this.#element = createElement(this.template);
  //   }
  //   return this.#element;
  // }

  get filmInfoElement() {
    return this.element.querySelector('.film-details__top-container');
  }

  get commentsElement() {
    return this.element.querySelector('.film-details__bottom-container');
  }

  // removeElement() {
  //   this.#element = null;
  // }
}
