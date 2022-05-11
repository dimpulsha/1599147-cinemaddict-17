import { render } from '../render';
import { getContainerTemplates, getFilmSectionTemplates } from './container-template';
import ContainerView from '../view/container-view';
import FilmListView from '../view/film-list-view';
import FilmCardView from '../view/film-card-view';
import ShowMoreView from '../view/show-more-view';

import FilmPopupPresenter from './film-popup-presenter';

export default class FilmListPresenter {
  #siteContainers = getContainerTemplates();
  #filmSectionTemplates = getFilmSectionTemplates();
  // todo - перенести mainListSectionComponent и mainListContainerComponent в инит - если в dataset 0 записей - меняем заголовок (view) и контейнер mainListContainerComponent не формируем
  #mainListSectionComponent = new FilmListView(this.#filmSectionTemplates.mainList);
  #mainListContainerComponent = new ContainerView(this.#siteContainers.filmListContainer);

  init = (contentSection, dataSet, referenceDataModel) => {
    this.contentSection = contentSection;
    this.dataSet = dataSet;
    this.referenceDataModel = referenceDataModel;

    render(this.#mainListSectionComponent, this.contentSection);
    render(this.#mainListContainerComponent, this.#mainListSectionComponent.element);

    // возможно нужен отдельный прзентер для создания арочки с попапом, а здесь вместо рендера вызывать инит
    // this.dataSet.forEach((filmItem) => render(new FilmCardView(filmItem), this.#mainListContainerComponent.element));
    this.dataSet.forEach((filmItem) => this.#renderFilm(filmItem, this.referenceDataModel));

    render(new ShowMoreView(), this.#mainListSectionComponent.element);
  };

  #renderFilm = (filmItem, referenceModel) => {
    const filmCardComponent = new FilmCardView(filmItem);
    const filmCardElement = filmCardComponent.element.querySelector('.film-card__link');
    const popupRootElement = document.querySelector('body');

    const filmDetailsPopup = new FilmPopupPresenter();

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        console.log('esc');
        filmDetailsPopup.remove();
      }
    };

    const showPopup = () => filmDetailsPopup.init(popupRootElement, filmItem, referenceModel.getCommentsById(filmItem.commentsList));
    filmCardElement.addEventListener('click', () => {
      showPopup();
      document.addEventListener('keydown', onEscKeyDown);
    });

    render(filmCardComponent, this.#mainListContainerComponent.element);

  };

}
