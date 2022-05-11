import { render } from '../render';
import { getContainerTemplates } from './container-template';

import PopupView from '../view/popup/popup-view';
import ContainerView from '../view/container-view';
import PopupCloseView from '../view/popup/popup-close-view';
import PopupFilmDetailsPresenter from './popup-film-details-presenter';
import PopupFilmControlPresenter from './film-details-control-presenter';
import PopupFilmCommentsPresenter from './film-details-comments-presenter';
import PopupNewCommentsPresenter from './film-new-comments-presenter';

export default class FilmPopupPresenter {
  #siteContainers = getContainerTemplates();
  #popupInfoTemplate = this.#siteContainers.popupInfoSection;
  #popupCommentsTemplate = this.#siteContainers.popupCommentsSection;

  #popupComponent = new PopupView();
  #popupInfoComponent = new ContainerView(this.#popupInfoTemplate);
  #popupCommentsComponent = new ContainerView(this.#popupCommentsTemplate);
  #popupCloseComponent = new PopupCloseView();

  #filmDetails = new PopupFilmDetailsPresenter();
  #filmDetailsControl = new PopupFilmControlPresenter();
  #filmComments = new PopupFilmCommentsPresenter();
  #filmNewComments = new PopupNewCommentsPresenter();

  init = (contentSection, dataModel, referenceModel) => {
    this.dataItem = dataModel.filmItem;
    this.commentsList = referenceModel.getCommentsList();

    render(this.#popupComponent, contentSection);
    render(this.#popupInfoComponent, this.#popupComponent.element);
    render(this.#popupCommentsComponent, this.#popupComponent.element);
    render(this.#popupCloseComponent, this.#popupInfoComponent.element);
    this.#filmDetails.init(this.dataItem, this.#popupInfoComponent.element);
    this.#filmDetailsControl.init(this.dataItem, this.#popupInfoComponent.element);
    this.#filmComments.init(this.commentsList, this.#popupCommentsComponent.element);
    this.#filmNewComments.init(this.#popupCommentsComponent.element);

  };
}
