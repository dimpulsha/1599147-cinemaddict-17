import { render } from '../framework/render.js';
import { getFilmSectionConfig } from '../config';
// import { isEscKey } from '../utils/utils';
// import { getRootElement, getOpenPopup, removeNoScroll, setNoScroll } from '../view/application-body';
import ContainerView from '../view/container-view';
import FilmListTitleView from '../view/film-list-title-view';
import FilmCardView from '../view/film-card-view';
import FilmPopupPresenter from './film-popup-presenter';

export default class FilmsList {

  constructor(listName) {
    this.listName = listName;
  }

  _renderFilm = (contentSection, filmItem, referenceModel, rootComponent) => {
    const filmCardComponent = new FilmCardView(filmItem);
    // const filmCardElement = filmCardComponent.filmCard;
    const filmDetailsPopup = new FilmPopupPresenter();
    const popupRootElement = rootComponent.element;

    const popupRemove = () => {
      filmDetailsPopup.remove();
      rootComponent.removeNoScroll();
      // document.removeEventListener('keydown', onEscKeyDown);
      rootComponent.removeEscKeyDownHandler();
    };

    // function onEscKeyDown (evt) {
    //   if (isEscKey(evt)) {
    //     evt.preventDefault();
    //     popupRemove();
    //   }
    // }

    const onCloseButtonPopup = () => {
      popupRemove();
    };

    const showPopup = () => {
      const openedPopupElement = rootComponent.openPopup;
      if (openedPopupElement) {
        // document.removeEventListener('keydown', onEscKeyDown);
        rootComponent.removeEscKeyDownHandler();
        openedPopupElement.remove();
        rootComponent.removeNoScroll();
      }
      rootComponent.setNoScroll();
      // console.log(popupRootElement);
      filmDetailsPopup.init(popupRootElement, filmItem, referenceModel.getCommentsById(filmItem.commentsList));
      filmDetailsPopup.popupComponent.setCloseClickHandler(onCloseButtonPopup);
    };

    const handleEscKeyDown = () => {
      popupRemove();
    };

    const onFilmCardClick = () => {
      showPopup();
      // document.addEventListener('keydown', onEscKeyDown);
      rootComponent.setEscKeyDownHandler(handleEscKeyDown);
    };

    filmCardComponent.setClickCardHandler(onFilmCardClick);

    render(filmCardComponent, contentSection.element);
  };

  _renderFilmsSlice = (contentSection, films, referenceDataModel, startIndex, stopIndex, rootComponent) => {
    films.slice(startIndex, stopIndex).forEach((filmItem) => this._renderFilm(contentSection, filmItem, referenceDataModel, rootComponent));
  };

  _renderFilmList = (contentSection, dataset, referenceDataModel, startIndex, stopIndex, rootComponent) => {
    const filmListContainer = new ContainerView('filmListContainer');
    render(filmListContainer, contentSection);
    this._renderFilmsSlice(filmListContainer, dataset, referenceDataModel, startIndex, stopIndex, rootComponent);
  };

  init = (contentSection, dataset, referenceModel, rootComponent) => {
    const renderStartIndex = 0;
    const sectionConfig = getFilmSectionConfig()[this.listName];
    const filmListSectionComponent = new ContainerView(sectionConfig.sectionName);
    const filmListSectionTitleComponent = new FilmListTitleView(sectionConfig.defaultTitle, sectionConfig.defaultTitleClass);
    render(filmListSectionComponent, contentSection);
    render(filmListSectionTitleComponent, filmListSectionComponent.element);
    if (dataset.length > 0) {
      this._renderFilmList(filmListSectionComponent.element, dataset, referenceModel, renderStartIndex, sectionConfig.LIST_SLICE, rootComponent);
    }
  };
}
