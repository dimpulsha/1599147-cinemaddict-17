import { render } from '../framework/render.js';
import { getFilmSectionConfig } from '../config';
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
    const filmDetailsPopup = new FilmPopupPresenter();
    const popupRootElement = rootComponent.element;

    const popupRemove = () => {
      filmDetailsPopup.remove();
      rootComponent.removeNoScroll();
      rootComponent.removeEscKeyDownHandler();
    };

    const onCloseButtonPopup = () => {
      popupRemove();
    };

    const showPopup = () => {
      const openedPopupElement = rootComponent.openPopup;
      if (openedPopupElement) {
        rootComponent.removeEscKeyDownHandler();
        openedPopupElement.remove();
        rootComponent.removeNoScroll();
      }
      rootComponent.setNoScroll();
      filmDetailsPopup.init(popupRootElement, filmItem, referenceModel.getCommentsById(filmItem.commentsList));
      filmDetailsPopup.popupComponent.setCloseClickHandler(onCloseButtonPopup);
    };

    const handleEscKeyDown = () => {
      popupRemove();
    };

    const onFilmCardClick = () => {
      showPopup();
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
