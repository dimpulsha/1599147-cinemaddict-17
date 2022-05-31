// import { render } from '../framework/render.js';
// import { getPageEntryPoints } from '../config';
import ApplicationBodyView from '../view/application-body-view';
import UserProfilePresenter from './profile-presenter';
import MainSectionPresenter from './main-section-presenter';
import StatisticPresenter from './statistic-presenter';

export default class PagePresenter {
  applicationBody = new ApplicationBodyView();

  constructor(dataModel, referenceModel) {
    this.dataModel = dataModel;
    this.referenceModel = referenceModel;
  }

  #userProfile = new UserProfilePresenter();
  #statisticFilms = new StatisticPresenter(this.dataModel);
  #mainContentSection = new MainSectionPresenter();

  init = () => {
    this.#userProfile.init(this.applicationBody.headerElement, this.dataModel);
    this.#statisticFilms.init(this.applicationBody.statisticElement, this.dataModel);
    this.#mainContentSection.init(this.applicationBody.mainElement, this.dataModel, this.referenceModel, this.applicationBody);
  };
}
