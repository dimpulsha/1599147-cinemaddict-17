import { render } from './render';
import UserProfileView from './view/profile-view';
import StatisticView from './view/statistic-view';

import NavigationPresenter from './presenter/navigation-presenter';
import SortPresenter from './presenter/sort-presenter';
import FilmsPresenter from './presenter/films-pesenter';
import FilmDetailsPresenter from './presenter/film-details-presenter';

import FilmModel from './model/film-model';
import CommentsModel from './model/comment-model';

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

render(new UserProfileView(), siteHeaderElement);

const siteNavigation = new NavigationPresenter();
siteNavigation.init(siteMainElement);

const siteSort = new SortPresenter();
siteSort.init(siteMainElement);

const filmModel = new FilmModel;
const siteFilms = new FilmsPresenter();
siteFilms.init(siteMainElement, filmModel);

const statisticElement = document.querySelector('.footer__statistics');
render(new StatisticView(), statisticElement);

const commentsModel = new CommentsModel();
const filmDetailsPopup = new FilmDetailsPresenter();
filmDetailsPopup.init(siteBodyElement, filmModel, commentsModel);
