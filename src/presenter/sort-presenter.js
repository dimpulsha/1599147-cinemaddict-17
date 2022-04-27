import { render } from '../render';
import { getContainerTemplates } from './container-template';
import ContainerView from '../view/container-view';
import SortItemView from '../view/sort-item-view';


export default class SortPresenter {
  siteContainers = getContainerTemplates();
  sortContainerComponent = new ContainerView(this.siteContainers.sort);
  sortItems = ['<li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>',
    '<li><a href="#" class="sort__button">Sort by date</a></li>',
    '<li><a href="#" class="sort__button">Sort by rating</a></li>'];

  init = (contentSection) => {
    this.contentSection = contentSection;
    render(this.sortContainerComponent, contentSection);
    this.sortItems.forEach((value) => render(new SortItemView(value), this.sortContainerComponent.getElement()));
  };
}
