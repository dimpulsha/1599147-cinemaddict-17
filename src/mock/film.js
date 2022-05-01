import { getRandomInteger, getRandomItem } from '../utils/utils';

const MIN_MOCK_FILMS = 5;
const MAX_MOCK_FILMS = 15;

// id
// создание массива комментов
// заполнение массива коментов
// рейтинг
// длительность (от 55 до 240)
// название
// постер
// возраст
// актеры
// режиссер
// сценарий

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
  'comments': [ 1, 23, 32, 42, 11, 67 ],
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
      'Takeshi Kitano'
    ],
    'actors': [
      'Morgan Freeman'
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
      'Comedy'
    ],
    // 139...
    'description': 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.'
  },
  'user_details': {
    'watchlist': false,
    'already_watched': true,
    'watching_date': '2019-04-12T16:12:32.554Z',
    'favorite': false
  }
});

const getFilmListMock = () => Array.from({ length: getRandomInteger(MIN_MOCK_FILMS, MAX_MOCK_FILMS) }, getFilmMock );

export { getFilmMock, getFilmListMock };
