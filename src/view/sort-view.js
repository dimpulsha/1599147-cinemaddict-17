import AbstractView from '../framework/view/abstract-view.js';
import { getSortType } from '../config.js';

const activeClass = 'sort__button--active';
const sortType = getSortType();

const getCurrentSortElement = (element) => element.querySelector(`.${activeClass}`);

const setSortTypeClass = (currentElement, targetElement) => {
  currentElement.classList.remove(activeClass);
  targetElement.classList.add(activeClass);
};

const createSortTemplate = () => (
  ` <ul class="sort">
    <li><a href="#" class="sort__button ${activeClass}" data-sort-type="${sortType.DEFAULT}">Sort by default</a></li>
    <li><a href="#" class="sort__button" data-sort-type="${sortType.DATE}">Sort by date</a></li>
    <li><a href="#" class="sort__button" data-sort-type="${sortType.RATING}">Sort by rating</a></li>
    </ul>`
);

export default class SortView extends AbstractView {

  get template() {
    return createSortTemplate();
  }

  setSortTypeChangeHandler = (callback) => {
    this._callback.sortTypeChange = callback;
    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  };

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'A') {
      return;
    }

    evt.preventDefault();
    this.#startSorting(evt);
  };

  #startSorting = (evt) => {
    const currentSortElement = getCurrentSortElement(this.element);
    if (currentSortElement === evt.target) {
      return;
    }

    setSortTypeClass (currentSortElement, evt.target);
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  };

}
