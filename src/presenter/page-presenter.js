// import { render } from '../framework/render.js';
import { getPageEntryPoints } from '../config';
import UserProfilePresenter from './profile-presenter';
import MainSectionPresenter from './main-section-presenter';
import StatisticPresenter from './statistic-presenter';

export default class PagePresenter {
  #pageEntryPoints = getPageEntryPoints();

  constructor(dataModel, referenceModel) {
    this.dataModel = dataModel;
    this.referenceModel = referenceModel;
  }

  // filmsCount = this.dataModel.films.length;
  #userProfile = new UserProfilePresenter();
  // заменить на statisticView
  #statisticFilms = new StatisticPresenter(this.dataModel);
  #mainContentSection = new MainSectionPresenter();

  init = () => {
    this.#userProfile.init(this.#pageEntryPoints.siteHeaderElement, this.dataModel);
    this.#statisticFilms.init(this.#pageEntryPoints.statisticElement, this.dataModel);
    this.#mainContentSection.init(this.#pageEntryPoints.siteMainElement, this.dataModel, this.referenceModel);
    // render(this.#statisticComponent, this.#pageEntryPoints.statisticElement);
  };
}
