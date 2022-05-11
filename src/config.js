const MAX_TEXT_LENGTH = 139;
const TOO_MACH_TEXT = '...';
const FILM_LIST_SLICE = 5;
const TOP_FILM_SLICE = 2;
const COMMENTED_FILM_SLICE = 2;
const emotions = ['smile', 'sleeping', 'puke', 'angry'];

const getDescriptionLimit = () => MAX_TEXT_LENGTH;
const getReplacedText = () => TOO_MACH_TEXT;
const getFilmSlice = () => FILM_LIST_SLICE;
const getTopFilmSlice = () => TOP_FILM_SLICE;
const getCommentedFilmSlice = () => COMMENTED_FILM_SLICE;
const getEmotionsList = () => emotions;

export { getDescriptionLimit, getReplacedText, getFilmSlice, getTopFilmSlice, getCommentedFilmSlice, getEmotionsList };
