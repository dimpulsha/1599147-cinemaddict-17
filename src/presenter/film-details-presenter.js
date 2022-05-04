import { render } from '../render';
import { getContainerTemplates } from './container-template';
import FilmDetailsFormView from '../view/popup/film-details-form-view';
import FilmDetailsInfoView from '../view/popup/film-details-info-view';
import FilmControlItemView from '../view/popup/film-control-item-view';
import FilmCommentsContainerView from '../view/popup/film-comments-container-view';
import FilmCommentsItemView from '../view/popup/film-comment-item-view';
import FilmNewCommentsView from '../view/popup/film-new-comments-view';
import ContainerView from '../view/container-view';

export default class FilmDetailsPresenter {
  siteContainers = getContainerTemplates();
  popupFilmDetailsContainer = new ContainerView(this.siteContainers.popupFilmDetails);
  filmDetailsForm = new FilmDetailsFormView();
  filmInfoContainerElement = this.filmDetailsForm.getElement().querySelector('.film-details__top-container');
  filmDetailsControl = new ContainerView(this.siteContainers.filmDetailsControls);
  filmCommentsContainerElement = this.filmDetailsForm.getElement().querySelector('.film-details__bottom-container');
  filmCommentsList = new ContainerView(this.siteContainers.filmCommentsList);
  filmCommentsContainer = new FilmCommentsContainerView();
  filmDetailsControlsList = ['<button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>',
    '<button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watched" id="watched" name="watched">Already watched</button>',
    '<button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>'];

  init = (contentSection, filmModel) => {
    render(this.popupFilmDetailsContainer, contentSection);
    render(this.filmDetailsForm, this.popupFilmDetailsContainer.getElement());
    // передаем информацию о каком-то фильме
    // todo - надо передавать инфу о конкретном фильме
    render(new FilmDetailsInfoView(filmModel.getFilmItem()), this.filmInfoContainerElement);


    render(this.filmDetailsControl, this.filmInfoContainerElement);
    this.filmDetailsControlsList.forEach((value) => render(new FilmControlItemView(value), this.filmDetailsControl.getElement()));
    render(this.filmCommentsContainer, this.filmCommentsContainerElement);
    render(this.filmCommentsList, this.filmCommentsContainer.getElement());

    // передаем список комментариев и проходимся по списку
    render(new FilmCommentsItemView(), this.filmCommentsList.getElement());
    render(new FilmNewCommentsView(), this.filmCommentsContainerElement);
  };

}
