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

export { getRandomInteger, getRandomItem, getHours, getYear, humanizeDate };


