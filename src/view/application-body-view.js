import AbstractView from '../framework/view/abstract-view.js';
import { isEscKey } from '../utils/utils';

export default class ApplicationBodyView extends AbstractView {

  get template() {
    return '';
  }

  get element() {
    return document.querySelector('body');
  }

  get mainElement() {
    return this.element.querySelector('.main');
  }

  get headerElement() {
    // console.log(this.element.querySelector('.header'));
    return this.element.querySelector('.header');
  }

  get statisticElement() {
    return this.element.querySelector('.footer__statistics');
  }

  get openPopup() {
    return document.querySelector('.film-details');
  }

  removeNoScroll = () => this.element.classList.remove('hide-overflow');
  setNoScroll = () => this.element.classList.add('hide-overflow');


  setEscKeyDownHandler = (callback) => {
    this._callback.click = callback;
    this.element.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #escKeyDownHandler = (evt) => {
    if (isEscKey(evt)) {
      evt.preventDefault();
      this._callback.click();
    }
  };

  removeEscKeyDownHandler = () => {
    this.element.removeEventListener('keydown', this.#escKeyDownHandler);
  };

}
// export { getRootElement, getMainElement, getHeaderElement, getStatisticElement, getOpenPopup ,removeNoScroll, setNoScroll};
