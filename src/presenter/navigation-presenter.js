import { render } from '../render';
import NavigationView from '../view/navigation-view';


export default class NavigationPresenter {

  init = (contentSection) => {
    this.contentSection = contentSection;
    render(new NavigationView(),  this.contentSection);
  };
}
