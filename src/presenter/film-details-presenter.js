import { render } from '../render';
import { getContainerTemplates } from './container-template';
import FilmDetailsFormView from '../view/popup/film-details-form-view';
import FilmDetailsInfoView from '../view/popup/film-details-info-view';

// import FilmControlItemView from '../view/popup/film-control-item-view';
import FilmDetailsControlView from '../view/popup/film-details-control-view';
import FilmCommentsContainerView from '../view/popup/film-comments-container-view';
import FilmCommentsItemView from '../view/popup/film-comment-item-view';
import FilmNewCommentsView from '../view/popup/film-new-comments-view';
import ContainerView from '../view/container-view';

export default class FilmDetailsPresenter {

  siteContainers = getContainerTemplates();
  popupFilmDetailsContainer = new ContainerView(this.siteContainers.popupFilmDetails);
  filmDetailsForm = new FilmDetailsFormView();
  filmInfoContainer = this.filmDetailsForm.getElement().querySelector('.film-details__top-container');
  commentsContainer = this.filmDetailsForm.getElement().querySelector('.film-details__bottom-container');

  filmCommentsList = new ContainerView(this.siteContainers.filmCommentsList);
  filmCommentsContainer = new FilmCommentsContainerView();

  init = (contentSection, dataModel) => {
    // берем из модели информацию о каком-то фильме
    // todo - надо передавать инфу о конкретном фильм
    this.dataItem = dataModel.getFilmItem();
    // filmDetailsControl = new FilmDetailsControlView(this.dataItem);

    render(this.popupFilmDetailsContainer, contentSection);
    render(this.filmDetailsForm, this.popupFilmDetailsContainer.getElement());
    render(new FilmDetailsInfoView(this.dataItem), this.filmInfoContainer);
    render(new FilmDetailsControlView(this.dataItem), this.filmInfoContainer);

    // передаем список выбранных комментариев и проходимся по списку
    render(this.filmCommentsContainer, this.commentsContainer);
    render(this.filmCommentsList, this.filmCommentsContainer.getElement());
    render(new FilmCommentsItemView(), this.filmCommentsList.getElement());

    // new comment
    render(new FilmNewCommentsView(), this.commentsContainer);
  };
}
