import View from './view.js';
import {html} from '../tools/safe-html.js';

class UserView extends View {
  constructor() {
    super();

    this.classList.add('profile');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    `;
  }
}

customElements.define('user-view', UserView);

export default UserView;

