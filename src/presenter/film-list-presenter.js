import { render } from '../render';
import { getContainerTemplates, getFilmSectionTemplates } from './container-template';
import ContainerView from '../view/container-view';
import FilmListView from '../view/film-list-view';
import FilmCardView from '../view/film-card-view';
import ShowMoreView from '../view/show-more-view';

export default class FilmListPresenter {
  #siteContainers = getContainerTemplates();
  #filmSectionTemplates = getFilmSectionTemplates();
  // todo - перенести mainListSectionComponent и mainListContainerComponent в инит - если в dataset 0 записей - меняем заголовок (view) и контейнер mainListContainerComponent не формируем
  #mainListSectionComponent = new FilmListView(this.#filmSectionTemplates.mainList);
  #mainListContainerComponent = new ContainerView(this.#siteContainers.filmListContainer);

  init = (contentSection, dataSet) => {
    this.contentSection = contentSection;
    this.dataSet = dataSet;
    render(this.#mainListSectionComponent, this.contentSection);
    render(this.#mainListContainerComponent, this.#mainListSectionComponent.element);

    this.dataSet.forEach((filmItem) => render(new FilmCardView(filmItem), this.#mainListContainerComponent.element));

    render(new ShowMoreView(), this.#mainListSectionComponent.element);
  };
}
