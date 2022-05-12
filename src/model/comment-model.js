import { getCommentsListMock } from '../mock/comment';

const getCommentData = (item) => ({
  id: item.id,
  author: item.author,
  comment: item.comment,
  date: item.date,
  emotion: item.emotion,
});

export default class CommentsModel {
  comments = getCommentsListMock();
  getCommentsList = () => this.comments.map((value) => getCommentData(value));
  getCommentsById = (arrayOfId) => this.comments.filter((element) => arrayOfId.includes(element.id));
}
