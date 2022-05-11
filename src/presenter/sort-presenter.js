import { render } from '../render';
import SortView from '../view/sort-view';

export default class SortPresenter {

  init = (contentSection) => {
    this.contentSection = contentSection;
    render(new SortView(),  this.contentSection);
  };
}
