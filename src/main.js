import PagePresenter from './presenter/page-presenter';
import FilmModel from './model/film-model';
import CommentsModel from './model/comment-model';

const filmModel = new FilmModel;
const commentsModel = new CommentsModel();
const applicationPage = new PagePresenter(filmModel, commentsModel);

applicationPage.init();
