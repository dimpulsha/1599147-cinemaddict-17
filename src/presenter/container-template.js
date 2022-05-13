const containerListTemplates = {
  contentSection: '<section class="films"></section>',
  filmListSection: '<section class="films-list"> </section>',
  filmListContainer: '<div class="films-list__container"></div>',
  popupContainer: '<section class="film-details"> </section>',
  // popupInfoSection: '<div class="film-details__top-container"></div>',
  // popupCommentsSection: ' <div class="film-details__bottom-container"></div>',
  filmDetailsControls: '<section class="film-details__controls"></section>',

};

// todo - возможно перенести во вью
const filmSectionTemplates = {
  mainList: '<section class="films-list"> </section>',
  topList: '<section class="films-list films-list--extra"> <h2 class="films-list__title"> Top rated</h2> </section>' ,
  commentList: '<section class="films-list films-list--extra"> <h2 class="films-list__title">Most commented</h2> </section>',
};

const filmListHeaders = {
  NOTEMPTY: 'All movies. Upcoming',
  ALLEMPTY: 'There are no movies in our database',
  WATCH: 'There are no movies to watch now',
  HISTORY: 'There are no watched movies now',
  FAVORITES: 'There are no favorite movies now'
};

const getContainerTemplates = () => containerListTemplates;
const getFilmSectionTemplates = () => filmSectionTemplates;
const getFilmListHeaders = () => filmListHeaders;

export { getContainerTemplates, getFilmSectionTemplates, getFilmListHeaders };
