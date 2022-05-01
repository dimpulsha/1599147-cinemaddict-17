import { render } from './render';
import { getContainerTemplates } from './presenter/container-template';
import UserProfileView from './view/profile-view';
import ContainerView from './view/container-view';
import StatisticView from './view/statistic-view';

import NavigationPresenter from './presenter/navigation-presenter';
import SortPresenter from './presenter/sort-presenter';
import FilmListPresenter from './presenter/film-list-presenter';
import TopFilmPresenter from './presenter/top-film-presenter';
import CommentedFilmPresenter from './presenter/commented-film-presenter';
import FilmDetailsPresenter from './presenter/film-details-presenter';

import { FilmModel } from './model/film-model';
// import './model/film-model';

const films = new FilmModel();
console.log(films.getShortFilmsInfo());

const siteContainers = getContainerTemplates();

const siteBodyElement = document.querySelector('body');
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

render(new UserProfileView(), siteHeaderElement);

const siteNavigation = new NavigationPresenter();
siteNavigation.init(siteMainElement);

const siteSort = new SortPresenter();
siteSort.init(siteMainElement);

const contentSection = new ContainerView(siteContainers.contentSection);
render(contentSection, siteMainElement);

const filmList = new FilmListPresenter();
filmList.init(contentSection.getElement());

const topFilmList = new TopFilmPresenter();
topFilmList.init(contentSection.getElement());

const commentedFilmList = new CommentedFilmPresenter();
commentedFilmList.init(contentSection.getElement());

const statisticElement = document.querySelector('.footer__statistics');
render(new StatisticView(), statisticElement);

// const filmDetailsPopup = new FilmDetailsPresenter();
// filmDetailsPopup.init(siteBodyElement);

