import {render} from './framework/render.js';
import { getFilmSlice } from '../config';
import { getContainerTemplates, getFilmSectionTemplates, getFilmListHeaders } from './container-template';
import ContainerView from '../view/container-view';
import FilmListHeaderView from '../view/film-list-header-view';
import FilmCardView from '../view/film-card-view';
import ShowMoreView from '../view/show-more-view';

import FilmPopupPresenter from './film-popup-presenter';

//todo - далее перенести на уровень view
const popupRootElement = document.querySelector('body');
const getOpenPopup = () => popupRootElement.querySelector('.film-details');
const filmSliceCount = getFilmSlice();

//todo - единый÷ класс для 3х списков, но разные параметры создания экземпляра.
export default class FilmListPresenter {
  #siteContainers = getContainerTemplates();
  #filmSectionTemplates = getFilmSectionTemplates();
  #mainListSectionComponent = new ContainerView(this.#siteContainers.filmListSection);
  #mainListContainerComponent = new ContainerView(this.#siteContainers.filmListContainer);
  #mainListHeaderComponent = new FilmListHeaderView();
  #showMoreComponent = new ShowMoreView();
  #renderStartIndex = 0;
  #renderFilmCount = filmSliceCount;
  #filmsData = [];
  #filmListHeaders = getFilmListHeaders();
  #filmListContext = null;

  init = (contentSection, dataSet, referenceDataModel) => {
    this.contentSection = contentSection;
    this.#filmsData = dataSet;
    this.referenceDataModel = referenceDataModel;
    // todo - пока константа. далее надо как-то получать сведения о выбранном фильтре
    // todo - текст заголовка перенести в конструктор вьюхи
    this.#filmListContext = this.#filmListHeaders.ALLEMPTY;


    render(this.#mainListSectionComponent, this.contentSection);

    if (this.#filmsData.length === 0) {
      this.#renderHeader(this.#mainListHeaderComponent, this.#filmListContext, this.#mainListSectionComponent.element);
      return;
    }

    this.#renderHeader(this.#mainListHeaderComponent, this.#filmListHeaders.NOEMPTY, this.#mainListSectionComponent.element, 'visually-hidden');
    this.#renderFilmsContainer(this.#filmsData);

  };

  // #renderFilmsSectionComponent = (dataSet, target) => { };

  #renderHeader = (component, text, target, cssClass = null) => {
    component.element.textContent = text;
    component.element.classList.add(cssClass);
    render(component, target);
  };

  #renderFilmsContainer = (dataSet) => {
    render(this.#mainListContainerComponent, this.#mainListSectionComponent.element);

    this.#renderFilmsSlice(this.#filmsData, this.referenceDataModel, this.#renderStartIndex, Math.min(this.#filmsData.length, filmSliceCount) );

    if (dataSet.length > filmSliceCount) {
      render(this.#showMoreComponent, this.#mainListSectionComponent.element);
      this.#showMoreComponent.element.addEventListener('click', this.#handleShowMoreClick);
    }
  };

  #handleShowMoreClick = (evt) => {
    evt.preventDefault();
    this.#renderStartIndex =+ this.#renderFilmCount;
    this.#renderFilmCount = this.#renderFilmCount + filmSliceCount;
    this.#renderFilmsSlice(this.#filmsData, this.referenceDataModel, this.#renderStartIndex,  this.#renderFilmCount);

    if (this.#filmsData.length < this.#renderFilmCount) {
      this.#showMoreComponent.element.remove();
      this.#showMoreComponent.removeElement();
    }
  };

  #renderFilmsSlice = (films, referenceDataModel, startIndex, stopIndex) => {
    films.slice(startIndex, stopIndex).forEach((filmItem) => this.#renderFilm(filmItem, referenceDataModel));
  };

  #renderFilm = (filmItem, referenceModel) => {
    const filmCardComponent = new FilmCardView(filmItem);
    const filmCardElement = filmCardComponent.element.querySelector('.film-card__link');
    const filmDetailsPopup = new FilmPopupPresenter();

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
      const openedPopupElement = getOpenPopup();
      if (openedPopupElement) {
        document.removeEventListener('keydown', onEscKeyDown);
        openedPopupElement.remove();
        popupRootElement.classList.add('.hide-overflow');
      }
      popupRootElement.classList.add('.hide-overflow');
      filmDetailsPopup.init(popupRootElement, filmItem, referenceModel.getCommentsById(filmItem.commentsList));
      filmDetailsPopup.popupCloseElement.addEventListener('click', onCloseButtonPopup);
    };

    filmCardElement.addEventListener('click', () => {
      showPopup();
      document.addEventListener('keydown', onEscKeyDown);
    });
    // todo возможно нужен отдельный прзентер для одновременного создания карточки с попапом, и вместо рендера карточки вызывать инит
    render(filmCardComponent, this.#mainListContainerComponent.element);
  };

}
