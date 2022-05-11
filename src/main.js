import UserProfilePresenter from './presenter/profile-presenter';

import NavigationPresenter from './presenter/navigation-presenter';
import SortPresenter from './presenter/sort-presenter';
import FilmsPresenter from './presenter/films-presenter';
import StatisticPresenter from './presenter/statistic-presenter';
import FilmPopupPresenter from './presenter/film-popup-presenter';

import FilmModel from './model/film-model';
import CommentsModel from './model/comment-model';

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const statisticElement = document.querySelector('.footer__statistics');

const userProfile= new UserProfilePresenter();
userProfile.init(siteHeaderElement);

const siteNavigation = new NavigationPresenter();
siteNavigation.init(siteMainElement);

const siteSort = new SortPresenter();
siteSort.init(siteMainElement);

const filmModel = new FilmModel;
const siteFilms = new FilmsPresenter();
siteFilms.init(siteMainElement, filmModel);

const statistic = new StatisticPresenter();
statistic.init(statisticElement);

const commentsModel = new CommentsModel();

const filmDetailsPopup = new FilmPopupPresenter();
filmDetailsPopup.init(siteBodyElement, filmModel, commentsModel);
