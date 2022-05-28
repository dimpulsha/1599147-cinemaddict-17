import { render, remove } from '../framework/render.js';
import ShowMoreView from '../view/show-more-view';


export default class ShowMorePresenter {

  #showMoreComponent = null;
  #renderTarget = null;
  #loadMoreCallback = null;

  constructor(container, loadMoreCallback) {
    this.#renderTarget = container;
    this.#loadMoreCallback = loadMoreCallback;
  }

  init = () => {
    this.#showMoreComponent = new ShowMoreView();
    this.#showMoreComponent.setClickHandler(this.#loadMoreCallback);
    render(this.#showMoreComponent, this.#renderTarget);
  };

  destroy = () => {
    remove(this.#showMoreComponent);
  };
}

