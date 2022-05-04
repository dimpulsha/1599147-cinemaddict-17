import { render } from '../render';
import { getTopFilmSlice } from '../config';
import { getContainerTemplates, getFilmSectionTemplates } from './container-template';
import ContainerView from '../view/container-view';
import FilmListView from '../view/film-list-view';
import FilmCardView from '../view/film-card-view';

export default class TopFilmPresenter {
  cardLimit = 2;
  siteContainers = getContainerTemplates();
  filmSectionTemplates = getFilmSectionTemplates();
  topFimList = new FilmListView(this.filmSectionTemplates.topList);
  topFilmListContainer = new ContainerView(this.siteContainers.filmListContainer);

  init = (contentSection, filmsData) => {
    this.contentSection = contentSection;
    this.filmsData = filmsData;
    render(this.topFimList, this.contentSection);
    render(this.topFilmListContainer, this.topFimList.getElement());

    //   for (let i = 0; i < this.cardLimit; i++) {
    //     render(new FilmCardView(), this.topFilmListContainer.getElement());
    //   }
    // };
    this.filmsData.slice(0, getTopFilmSlice()).forEach((element) => {
      render(new FilmCardView(element), this.topFilmListContainer.getElement()); });
  };
}
