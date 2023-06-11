import './views/user-view.js';
import './views/main-navigation-view.js';
import './views/sort-view.js';
import './views/film-details-view.js';
import './views/footer-statistic-view.js';
import './views/film-list-tittle-view.js';
import './views/film-container-view.js';
import './views/show-more-view.js';
import './views/rate-container-view.js';
import './views/comment-container-view.js';

import FilmDetailsPresenter from './presenters/film-details-presenter.js';
import FilmContainerPresenter from './presenters/film-container-presenter.js';
import FooterStatisticPresenter from './presenters/footer-statistic-presenter.js';
import MainNavigationPresenter from './presenters/main-navigation-presenter.js';
import SortPresenter from './presenters/sort-presenter.js';
import UserPresenter from './presenters/user-presenter.js';
// import FilmModel from './model/film-model.js';
import FilmListTitlePresenter from './presenters/film-list-title-presenter.js';
import ShowMorePresenter from './presenters/show-more-presenter.js';
import RateContainerPresenter from './presenters/rate-container-presenter.js';
import CommentContainerPresenter from './presenters/comment-container-presenter.js';


const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

// const filmModel = new FilmModel();

new UserPresenter(header.querySelector('user-view'));
new MainNavigationPresenter(main.querySelector('main-navigation-view'));
new SortPresenter(main.querySelector('sort-view'));
new FilmListTitlePresenter(main.querySelector('film-list-tittle-view'));
new FilmContainerPresenter(main.querySelector('film-container-view'));
new ShowMorePresenter(main.querySelector('show-more-view'));
new RateContainerPresenter(main.querySelector('rate-container-view'));
new CommentContainerPresenter(main.querySelector('comment-container-view'));
new FilmDetailsPresenter(document.querySelector('film-details-view'));
new FooterStatisticPresenter(footer.querySelector('footer-statistic-view'));
// (как на разные элементы навесить одинаковые презентеры? или никак?)
