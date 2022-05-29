import AbstractView from '../framework/view/abstract-view.js';
import { getSortType } from '../config.js';

const activeClass = 'sort__button--active';
const sortType = getSortType();

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
}
