'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  let year = '';
  let month = '';
  let day = '';

  const fromSeparator = fromFormat[fromFormat.length - 1];
  const dateParts = date.split(fromSeparator);

  fromFormat.slice(0, 3).forEach((part, index) => {
    if (part === 'YYYY' || part === 'YY') {
      year = dateParts[index];
    } else if (part === 'MM') {
      month = dateParts[index];
    } else if (part === 'DD') {
      day = dateParts[index];
    }
  });

  const toSeparator = toFormat[toFormat.length - 1];

  const formattedDateParts = toFormat.slice(0, 3).map((part) => {
    if (part === 'YYYY') {
      return year.length === 2 ? `${+year < 30 ? '20' : '19'}${year}` : year;
    } else if (part === 'YY') {
      return year.length === 4 ? year.slice(2) : year;
    } else if (part === 'MM') {
      return month;
    } else if (part === 'DD') {
      return day;
    }
  });

  return formattedDateParts.join(toSeparator);
}

module.exports = formatDate;
