import dayjs from 'dayjs';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomItem = (array) => array[getRandomInteger(0, array.length - 1)];
const getHours = (minutes) => `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
const getYear = (date) => dayjs(date).format('YYYY');
const humanizeDate = (dueDate) => dayjs(dueDate).format('D MMMM YYYY');
const humanizeDateTime = (dueDate) => dayjs(dueDate).format('YYYY/MM/DD HH:mm');

const getShortText = (text, length, releasedText) => {
  if (text.length > length) { text = `${text.slice(0, length)}${releasedText}`; }
  return text;
};

const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const deepArrayCopy = (array) => array.map((item) => ({ ...item }));

const setActiveClass = (isActive, activeObject) => isActive ? activeObject : '';

export { getRandomInteger, getRandomItem, getHours, getYear, humanizeDate, getShortText, setActiveClass, humanizeDateTime, deepArrayCopy, isEscKey };


