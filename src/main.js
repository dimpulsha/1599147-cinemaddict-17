import './views/user-view.js';
import './views/main-navigation-view.js';
import './views/sort-view.js';
import './views/film-list-view.js';
import './views/top-rated-view.js';
import './views/top-comment-view.js';
import './views/film-details-view.js';
import './views/footer-statistic-view.js';

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

/**
 * @type {UserView}
 */
const userView = header.querySelector('user-view');

/**
 * @type {MainNavigationView}
 */
const mainNavigationView = main.querySelector('main-navigation-view');

/**
 * @type {SortView}
 */
const sortView = main.querySelector('sort-view');

/**
 * @type {FilmListView}
 */
const filmListView = main.querySelector('film-list-view');

/**
 * @type {TopRatedView}
 */
const topRatedView = main.querySelector('top-rated-view');

/**
 * @type {TopCommentView}
 */
const topCommentView = main.querySelector('top-comment-view');

/**
 * @type {FilmDetailsView}
 */
const filmDetailsView = document.querySelector('film-details-view');

/**
 * @type {FooterStatisticView}
 */
const footerStatisticView = document.querySelector('footer-statistic-view');

userView.render();
mainNavigationView.render();
sortView.render();
filmListView.render();
topRatedView.render();
topCommentView.render();
filmDetailsView.render();
footerStatisticView.render();
