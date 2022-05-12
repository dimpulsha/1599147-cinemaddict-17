import { createElement } from '../../render';
import { getEmotionsList } from '../../config';

const emotionList = getEmotionsList();

const createRadioButton = (item) => (`
  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${item} value="${item}">
  <label class="film-details__emoji-label" for="emoji-${item}">
      <img src="./images/emoji/${item}.png" width="30" height="30" alt="emoji">
  </label>`);

const createRadioButtonList = (itemList) => itemList.map((item) => createRadioButton(item)).join('');

const createFilmNewCommentsTemplate = (itemList) => (
  ` <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            ${createRadioButtonList(itemList)}
          </div>
        </div>`
);

export default class FilmNewCommentsView {
  #element = null;

  get template() {
    return createFilmNewCommentsTemplate(emotionList);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
