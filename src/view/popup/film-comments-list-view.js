import AbstractView from '../../framework/view/abstract-view.js';
import { humanizeDateTime } from '../../utils/utils';

const createCommentsItemTemplate = (item) => (
  `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${item.emotion}.png" width="55" height="55" alt="emoji-${item.emotion}">
      </span>
      <div>
        <p class="film-details__comment-text">${item.comment}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${item.author}</span>
          <span class="film-details__comment-day">${humanizeDateTime(item.date)}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`
);

const getCommentsElementList = (itemsList) => {
  let elementList = '';
  if (itemsList.length > 0) {
    itemsList.forEach((value) => { elementList += createCommentsItemTemplate(value); });
  }
  return elementList;
};

const createFilmListTemplate = (itemsList) => (
  ` <section class="film-details__comments-wrap">
      <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">
  ${itemsList.length}
      </span></h3>
       <ul class="film-details__comments-list">
     ${getCommentsElementList(itemsList)}
       </ul>
    </section>`
);

export default class FilmCommentsListView extends AbstractView{

  constructor(itemsList) {
    super();
    this.itemsList = itemsList;
  }

  get template() {
    return createFilmListTemplate(this.itemsList );
  }
}
