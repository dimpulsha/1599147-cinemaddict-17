import {render} from './framework/render.js';
import UserProfileView from '../view/profile-view';

export default class UserProfilePresenter {

  init = (contentSection) => {
    this.contentSection = contentSection;
    render(new UserProfileView(),  this.contentSection);
  };
}
