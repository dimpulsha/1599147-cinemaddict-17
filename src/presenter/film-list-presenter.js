import { render } from '../render';
import { getContainerTemplates, getFilmSectionTemplates } from './container-template';
import ContainerView from '../view/container-view';
import FilmListView from '../view/film-list-view';
import FilmCardView from '../view/film-card-view';
import ShowMoreView from '../view/show-more-view';

export default class FilmListPresenter {
  cardLimit = 5;
  siteContainers = getContainerTemplates();
  filmSectionTemplates = getFilmSectionTemplates();
  mainFilmList = new FilmListView(this.filmSectionTemplates.mainList);
  mainFilmListContainer = new ContainerView(this.siteContainers.filmListContainer);

  init = (contentSection) => {
    this.contentSection = contentSection;
    render(this.mainFilmList, this.contentSection);
    render(this.mainFilmListContainer, this.mainFilmList.getElement());

    for (let i = 0; i < this.cardLimit; i++) {
      render(new FilmCardView(), this.mainFilmListContainer.getElement());
    }
    render(new ShowMoreView(), this.mainFilmList.getElement());
  };
}

