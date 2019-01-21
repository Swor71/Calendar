export const dayList = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
export const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const date = new Date();

export const dayOfMonth = date.getDate();
export const currentMonth = date.getMonth();
export const currentYear = date.getFullYear();

export function numberOfDaysInMonth(yyyy, mm) {
  return new Date(yyyy, mm + 1, 0).getDate();
}

export function firstDayOfMonth(yyyy, mm) {
  return new Date(yyyy, mm, 0).getDay();
}

export function formatDate(yyyy, mm) {
  const date = new Date(yyyy, mm + 1, 0).toISOString();
  const month = date.slice(5,7);
  const year = date.slice(0,4);

  return `${monthList[Number(month - 1)]} ${year}`;
}

export function selectDate(yyyy, mm, dd) {
  const date = new Date(yyyy, mm + 1, 0).toISOString();
  const month = date.slice(5,7);
  const year = date.slice(0,4);

  return `${dd}/${month}/${year}`;
}

export function parseStringToDate(dateString) {
  const split = dateString.split('/');

  return new Date(`${split[1]}, ${split[0]}, ${split[2]}`);
}

export function dateToMS(dateString) {
  return parseStringToDate(dateString);
}

export function calculateDiffInDays(date1, date2) {
  return calculateAmountOfDays(Math.abs(dateToMS(date1) - dateToMS(date2)));
}

export function calculateAmountOfDays(ms) {
  return Math.floor(ms / (1000*60*60*24));
}
