import { getRandomInteger, getRandomItem } from '../utils/utils';

const MIN_MOCK_FILMS = 1;
const MAX_MOCK_FILMS = 23;

const filmPosters = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg'
];


const getFilmMock = () => ({
  'id': '0',
  //
  'comments': [ 1, 3, 5, 7, 9],
  'film_info': {
    //
    'title': 'A Little Pony Without The Carpet',
    'alternative_title': 'Laziness Who Sold Themselves',
    //
    'total_rating': 5.3,
    //
    'poster': `images/posters/${getRandomItem(filmPosters)}`,
    'age_rating': getRandomInteger(0, 18),
    'director': 'Tom Ford',
    'writers': [
      'Takeshi Kitano', 'Anne Wigton', 'Heinz Herald', 'Richard Weil'
    ],
    'actors': [
      'Morgan Freeman', 'Erich von Stroheim', 'Mary Beth Hughes', 'Dan Duryea'
    ],
    'release': {
      //
      'date': '2019-05-11T00:00:00.000Z',
      'release_country': 'Finland'
    },
    //
    'runtime': getRandomInteger(55, 240),
    // view
    'genre': [
      'Comedy',
      'Music',
      'Drama',
      'Film-Noir'
    ],
    // 139...
    'description': 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee. The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion\'s other assistant. Flamarion falls in love with Connie, the movie\'s femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.'
  },
  'user_details': {
    'watchlist': Boolean(getRandomInteger(0, 1)),
    'already_watched': Boolean(getRandomInteger(0, 1)),
    'watching_date': '2019-04-12T16:12:32.554Z',
    'favorite': Boolean(getRandomInteger(0, 1))
  }
});

const getFilmListMock = () => Array.from({ length: getRandomInteger(MIN_MOCK_FILMS, MAX_MOCK_FILMS) }, getFilmMock );

export { getFilmMock, getFilmListMock };
