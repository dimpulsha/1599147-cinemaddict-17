import AbstractView from '../framework/view/abstract-view.js';

const createProfileTemplate = (rating) => (
  `<section class="header__profile profile">
    <p class="profile__rating">${rating}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`
);

export default class UserProfileView extends AbstractView {
  constructor(rating) {
    super();
    this.rating = rating;
  }

  get template() {
    return createProfileTemplate(this.rating);
  }
}
