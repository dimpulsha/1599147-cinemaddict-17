// import { createElement } from '../../render';
// import { humanizeDateTime } from '../../utils/utils';

// const createCommentsItemTemplate = (item) => (
//   `<li class="film-details__comment">
//       <span class="film-details__comment-emoji">
//         <img src="./images/emoji/${item.emotion}.png" width="55" height="55" alt="emoji-${item.emotion}">
//       </span>
//       <div>
//         <p class="film-details__comment-text">${item.comment}</p>
//         <p class="film-details__comment-info">
//           <span class="film-details__comment-author">${item.author}</span>
//           <span class="film-details__comment-day">${humanizeDateTime(item.date)}</span>
//           <button class="film-details__comment-delete">Delete</button>
//         </p>
//       </div>
//     </li>`
// );

// const getCommentsElementList = (itemsList) => {
//   let elementList = '';
//   if (itemsList.length > 0) {
//     itemsList.forEach((value) => { elementList += createCommentsItemTemplate(value); });
//   }
//   return elementList;
// };

// const createCommentsListTemplate = (itemsList) => (`
//   <ul class="film-details__comments-list">
//  ${getCommentsElementList(itemsList)}
//   </ul>`
// );

// export default class FilmCommentsView {
//   constructor(itemsList) {
//     this.itemsList = itemsList;
//   }

//   getTemplate() {
//     return createCommentsListTemplate(this.itemsList);
//   }

//   getElement() {
//     if (!this.element) {
//       this.element = createElement(this.getTemplate());
//     }
//     return this.element;
//   }

//   removeElement() {
//     this.element = null;
//   }
// }
