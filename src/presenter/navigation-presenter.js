import { render } from '../render';
import { getContainerTemplates } from './container-template';
import ContainerView from '../view/container-view';
import NavigationItemView from '../view/navigation-item-view';

export default class NavigationPresenter {
  siteContainers = getContainerTemplates();
  navContainerComponent = new ContainerView(this.siteContainers.navigation);
  navItems = [' <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>',
    '<a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>',
    '<a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>',
    '<a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>'
  ];

  init = (contentSection) => {
    this.contentSection = contentSection;
    render(this.navContainerComponent, contentSection);
    this.navItems.forEach((value) => render(new NavigationItemView(value), this.navContainerComponent.getElement()));
  };
}
