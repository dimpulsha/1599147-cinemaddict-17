import './views/user-view.js';
import './views/main-navigation-view.js';
import './views/sort-view.js';
import './views/film-list-view.js';
import './views/top-rated-view.js';
import './views/top-comment-view.js';
import './views/film-details-view.js';
import './views/footer-statistic-view.js';

import FilmDetailsPresenter from './presenters/film-details-presenter.js';
import FilmListPresenter from './presenters/film-list-presenter.js';
import FooterStatisticPresenter from './presenters/footer-statistic-presenter.js';
import MainNavigationPresenter from './presenters/main-navigation-presenter.js';
import SortPresenter from './presenters/sort-presenter.js';
import TopCommentPresenter from './presenters/top-comment-presenter.js';
import TopRatedPresenter from './presenters/top-rated-presenter.js';
import UserPresenter from './presenters/user-presenter.js';

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

new UserPresenter(header.querySelector('user-view'));
new MainNavigationPresenter(main.querySelector('main-navigation-view'));
new SortPresenter(main.querySelector('sort-view'));
new FilmListPresenter(main.querySelector('film-list-view'));
new TopRatedPresenter(main.querySelector('top-rated-view'));
new TopCommentPresenter(main.querySelector('top-comment-view'));
new FilmDetailsPresenter(document.querySelector('film-details-view'));
new FooterStatisticPresenter(footer.querySelector('footer-statistic-view'));
