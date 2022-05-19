import AbstractView from '../framework/view/abstract-view.js';

const createFilterItemTemplate = (filter, isActive) => {
  const { name, count } = filter;
  const activeClass = 'main-navigation__item--active';
  return `<a href="#${name}" class="main-navigation__item ${ isActive ? activeClass: ''}">${name} <span class="main-navigation__item-count">${count}</span></a>`;
};

const createFilterListTemplate = (filters) =>
  // пока заглушка
  filters.map((item) => createFilterItemTemplate(item, false)).join('');

const createNavigationTemplate = (filters) => (

  `<nav class="main-navigation">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    ${createFilterListTemplate(filters)}
  </nav>`
);

export default class FilterView extends AbstractView {

  constructor(filters) {
    super();
    this.filters = filters;
  }

  get template() {
    // console.log(this.filters);
    return createNavigationTemplate(this.filters);
  }
}
