import {escape as escapeHtml} from 'he';
import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';

dayjs.extend(durationPlugin);

class SafeHtml extends String {}

/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 * @return {SafeHtml}
 */
function html(strings, ...values) {
  const result = strings.reduce((before, after, index) => {
    const value = values[index - 1];

    if (value === undefined) {
      return before + after;
    }

    if (Array.isArray(value) && value.every((it) => it instanceof SafeHtml)) {
      return before + value.join('') + after;
    }

    if (!(value instanceof SafeHtml)) {
      return before + escapeHtml(String(value)) + after;
    }

    return before + value + after;
  });

  return new SafeHtml(result);
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

/**
 * @param {Array} array
 */
const getRandomItem = (array) => array[getRandomInteger(0, array.length - 1)];

/**
 *
 * @param {string} text
 * @param {number} length
 * @param {string} releasedText
 * @returns
 */
const getShortText = (text, length, releasedText) => {
  if (text.length > length) {
    text = `${text.slice(0, length)}${releasedText}`;
  }
  return text;
};

/**
 * @param {string} dateTime
 * @return {string}
 */
const formatDate = (dateTime) => dayjs(dateTime).format('MMM D');

/**
 *
 * @param {string} dateTime
 * @return {string}
 */
const formatTime = (dateTime) => dayjs(dateTime).format('HH:mm');

/**
 * @param {string} startDateTime
 * @param {string} endDateTime
 * @return {number}
 */
const getDuration = (startDateTime, endDateTime) => dayjs(endDateTime).diff(startDateTime);

// /**
//  * @param {string} startDateTime
//  * @param {string} endDateTime
//  * @return {string}
//  */
// const formatDuration = (startDateTime, endDateTime) => {
//   const millisecondDuration = getDuration(startDateTime, endDateTime);
//   const duration = dayjs.duration(millisecondDuration);

//   if (duration.days()) {
//     return duration.format(DURATION_FORMATS.DURATION_DAY);
//   }

//   if (duration.hours()) {
//     return duration.format(DURATION_FORMATS.DURATION_HOURS);
//   }

//   return duration.format(DURATION_FORMATS.DURATION_MINUTES);

// };

/**
 * @param {HTMLInputElement} element
 */

export {SafeHtml, html, getRandomInteger, getRandomItem, formatDate, formatTime, getDuration, getShortText };
