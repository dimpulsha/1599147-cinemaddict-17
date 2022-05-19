import {render} from '../framework/render.js';
import UserProfileView from '../view/profile-view';
import { getRatingNames } from '../config';
import { setRating } from '../utils/appService';

export default class UserProfilePresenter {

  #getRatingName = (key) =>
    getRatingNames().get(String(key));

  init = (contentSection, dataModel) => {
    this.contentSection = contentSection;
    this.dataModel = dataModel;
    const ratingName = this.#getRatingName(setRating(dataModel.watchedFilms));
    render(new UserProfileView(ratingName),  this.contentSection);
  };
}
