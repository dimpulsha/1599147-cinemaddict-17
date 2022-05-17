const MAX_TEXT_LENGTH = 139;
const TOO_MACH_TEXT = '...';
// todo SLICE - удалить
// const FILM_LIST_SLICE = 5;
// const TOP_FILM_SLICE = 2;
// const COMMENTED_FILM_SLICE = 2;
const emotions = ['smile', 'sleeping', 'puke', 'angry'];
// const pageEntryPoints = {
//   bodyElement: document.querySelector('body'),
//   siteHeaderElement: document.querySelector('.header'),
//   siteMainElement: document.querySelector('.main'),
//   statisticElement: document.querySelector('.footer__statistics'),
//   openPopupElement: document.querySelector('.film-details')
// };
const ratingNames = new Map(Object.entries({
  0: '',
  1: 'Novice',
  2: 'Fan',
  3: 'Movie Buff'
}));

const filmSectionConfig = {
  ALL: {
    LIST_SLICE: 5,
    sectionName: 'filmListSection',
    defaultTitle: 'All movies. Upcoming',
    defaultTitleClass: 'visually-hidden',
    filters: {
      ALL: {
        emptyTitle: 'There are no movies in our database',
      },
      WATCH: {
        emptyTitle: 'There are no movies to watch now',
      },
      HISTORY: {
        emptyTitle: 'There are no watched movies now',
      },
      FAVORITES: {
        emptyTitle: 'There are no favorite movies now',
      },
    },
  },
  TOP: {
    LIST_SLICE: 2,
    sectionName: 'filmListSectionExtra',
    defaultTitle: 'Top rated',
    defaultTitleClass: null,
  },
  COMMENTED: {
    LIST_SLICE: 2,
    sectionName: 'filmListSectionExtra',
    defaultTitle: 'Most commented',
    defaultTitleClass: null,
  }
};

const getDescriptionLimit = () => MAX_TEXT_LENGTH;
const getReplacedText = () => TOO_MACH_TEXT;
// const getFilmSlice = () => FILM_LIST_SLICE;
// const getTopFilmSlice = () => TOP_FILM_SLICE;
// const getCommentedFilmSlice = () => COMMENTED_FILM_SLICE;
const getEmotionsList = () => emotions;
// const getPageEntryPoints = () => pageEntryPoints;
const getRatingNames = () => ratingNames;
const getFilmSectionConfig = () => filmSectionConfig;

// getFilmSlice, getTopFilmSlice, getCommentedFilmSlice, getPageEntryPoints,
export { getDescriptionLimit, getReplacedText, getEmotionsList, getRatingNames, getFilmSectionConfig };
