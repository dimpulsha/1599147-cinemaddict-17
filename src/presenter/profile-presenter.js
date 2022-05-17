import {render} from '../framework/render.js';
import UserProfileView from '../view/profile-view';
import { getRatingNames } from '../config';

export default class UserProfilePresenter {

  #setRating = (numFilms) => {
    let rating = 0;
    if (numFilms >= 10 && numFilms <= 10) {
      rating = 1;
    }
    if (numFilms >=11 && numFilms<=20 ) {
      rating = 2;
    }
    if (numFilms >= 21) {
      rating = 3;
    }
    // console.log(rating);
    return rating;
  };

  #getRatingName = (key) =>
    getRatingNames().get(String(key));

  init = (contentSection, dataModel) => {
    this.contentSection = contentSection;
    this.dataModel = dataModel;
    const ratingName = this.#getRatingName(this.#setRating(dataModel.watchedFilms));
    render(new UserProfileView(ratingName),  this.contentSection);
  };
}
