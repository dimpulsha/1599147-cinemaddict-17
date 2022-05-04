const containerListTemplates = {
  navigation: '<nav class="main-navigation"></nav',
  sort: '<ul class="sort"><ul>',
  contentSection: '<section class="films"></section>',
  filmListContainer: '<div class="films-list__container"></div>',
  popupFilmDetails: '<section class="film-details"> </section>',
  filmDetailsControls: '<section class="film-details__controls"></section>',
};

const filmSectionTemplates = {
  mainList: '<section class="films-list"> <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2> </section>',
  topList: '<section class="films-list films-list--extra"> <h2 class="films-list__title"> Top rated</h2> </section>' ,
  commentList: '<section class="films-list films-list--extra"> <h2 class="films-list__title">Most commented</h2> </section>',
};

const getContainerTemplates = () => containerListTemplates;
const getFilmSectionTemplates = () => filmSectionTemplates;

export { getContainerTemplates, getFilmSectionTemplates };


