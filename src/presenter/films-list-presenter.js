import { render } from '../framework/render.js';
import { getFilmSectionConfig, getPageEntryPoints } from '../config';
import ContainerView from '../view/container-view';
import FilmListTitleView from '../view/film-list-title-view';
import FilmCardView from '../view/film-card-view';
import FilmPopupPresenter from './film-popup-presenter';

export default class FilmsList {

  constructor(listName) {
    this.listName = listName;
  }

  _renderFilm = (contentSection, filmItem, referenceModel) => {
    const filmCardComponent = new FilmCardView(filmItem);
    // console.log(filmCardComponent);
    const filmCardElement = filmCardComponent.element.querySelector('.film-card__link');
    const filmDetailsPopup = new FilmPopupPresenter();
    const popupRootElement = getPageEntryPoints().bodyElement;

    const popupRemove = () => {
      filmDetailsPopup.remove();
      popupRootElement.classList.remove('.hide-overflow');
      document.removeEventListener('keydown', onEscKeyDown);
    };

    function onEscKeyDown  (evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        popupRemove();
      }
    }

    const onCloseButtonPopup = (evt) => {
      evt.preventDefault();
      popupRemove();
    };

    const showPopup = () => {
      const openedPopupElement = getPageEntryPoints().openPopupElement;
      if (openedPopupElement) {
        document.removeEventListener('keydown', onEscKeyDown);
        openedPopupElement.remove();
        popupRootElement.classList.add('.hide-overflow');
      }
      popupRootElement.classList.add('.hide-overflow');
      // console.log(popupRootElement);
      filmDetailsPopup.init(popupRootElement, filmItem, referenceModel.getCommentsById(filmItem.commentsList));
      filmDetailsPopup.popupCloseElement.addEventListener('click', onCloseButtonPopup);
    };

    filmCardElement.addEventListener('click', () => {
      showPopup();
      document.addEventListener('keydown', onEscKeyDown);
    });

    render(filmCardComponent, contentSection.element);
  };

  _renderFilmsSlice = (contentSection, films, referenceDataModel, startIndex, stopIndex) => {
    films.slice(startIndex, stopIndex).forEach((filmItem) => this._renderFilm(contentSection, filmItem, referenceDataModel));
  };

  _renderFilmList = (contentSection, dataset, referenceDataModel, startIndex, stopIndex) => {
    const filmListContainer = new ContainerView('filmListContainer');
    render(filmListContainer, contentSection);
    this._renderFilmsSlice(filmListContainer, dataset, referenceDataModel, startIndex, stopIndex);
  };

  init = (contentSection, dataset, referenceModel) => {
    const renderStartIndex = 0;
    const sectionConfig = getFilmSectionConfig()[this.listName];
    const filmListSectionComponent = new ContainerView(sectionConfig.sectionName);
    const filmListSectionTitleComponent = new FilmListTitleView(sectionConfig.defaultTitle, sectionConfig.defaultTitleClass);
    render(filmListSectionComponent, contentSection);
    render(filmListSectionTitleComponent, filmListSectionComponent.element);
    if (dataset.length > 0) {
      this._renderFilmList(filmListSectionComponent.element, dataset, referenceModel, renderStartIndex, sectionConfig.LIST_SLICE);
    }
  };
}
