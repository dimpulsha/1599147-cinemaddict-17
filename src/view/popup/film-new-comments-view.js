import AbstractStatefulView from '../../framework/view/abstract-stateful-view.js';
import { getEmotionsList } from '../../config';

const emotionList = getEmotionsList();

const isEmotion = (emotionItem, commentEmotion) => emotionItem === commentEmotion;

const createRadioButton = (item, comment) => (`
  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${item}" value="${item}" ${isEmotion(item, comment.emotion) ? 'checked' : ''}>
  <label class="film-details__emoji-label" for="emoji-${item}" data-emoj="${item}">
      <img src="./images/emoji/${item}.png" width="30" height="30" alt="emoji">
  </label>`);

const createRadioButtonList = (itemList, comment) => itemList.map((item) => createRadioButton(item, comment)).join('');

const setEmotionImg = (emotion) => {
  if (emotion) {
    return `<img src="images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">`;
  }
  return '';
};

const createFilmNewCommentsTemplate = (itemList, comment) => (`
  <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label">
          ${setEmotionImg(comment.emotion)}
          </div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">${comment.comment}</textarea>
          </label>

          <div class="film-details__emoji-list">
            ${createRadioButtonList(itemList, comment)}
          </div>
        </div>`
);

export default class FilmNewCommentsView extends AbstractStatefulView{

  constructor(comment) {
    super();
    this._state = comment;
    this.#setInnerHandlers();
  }

  get template() {
    return createFilmNewCommentsTemplate(emotionList, this._state);
  }

  setEmotionChangeHandler = () => {
    this.element.querySelectorAll('.film-details__emoji-label').forEach((element) => {
      element.addEventListener('click', this.#emotionChangeHandler);
    });
  };

  setCommentInputHandler = () => {
    this.element.querySelector('.film-details__comment-input').addEventListener('input', this.#commentInputHandler);
  };

  #emotionChangeHandler = (evt) => {
    evt.preventDefault();
    const currentEmoj = evt.target.closest('.film-details__emoji-label').dataset.emoj;
    this.updateElement({ emotion: currentEmoj });
  };

  #commentInputHandler = (evt) => {
    evt.preventDefault();
    this._setState({
      comment: evt.target.value,
    });
  };

  _restoreHandlers = () => {
    this.#setInnerHandlers();
  };

  #setInnerHandlers = () => {
    this.setEmotionChangeHandler();
    this.setCommentInputHandler();
  };
}
