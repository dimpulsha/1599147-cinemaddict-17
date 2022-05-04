import { getRandomInteger, getRandomItem } from '../utils/utils';

const MIN_MOCK_COMMENTS = 0;
const MAX_MOCK_COMMENTS = 10;

const emotions = ['smile', 'sleeping', 'puke', 'angry'];

const getCommentMock = () => ({
  'id': getRandomInteger(MIN_MOCK_COMMENTS, MAX_MOCK_COMMENTS),
  'author': 'Ilya O\'Reilly',
  'comment': 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
  'date': '2019-05-11T16:12:32.554Z',
  'emotion': getRandomItem(emotions),
});

const getCommentsListMock = () => Array.from({ length: getRandomInteger(MIN_MOCK_COMMENTS, MAX_MOCK_COMMENTS) }, getCommentMock );

export { getCommentMock, getCommentsListMock };
