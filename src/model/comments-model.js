// @ts-nocheck
import Model from './model';
import rawCommentsList from '../mock/comments.json';

export default class CommentsModel extends Model {

  #commentsList;

  constructor() {
    super();
    this.#commentsList = rawCommentsList;
  }

}
