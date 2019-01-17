export const daysArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
export const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const date = new Date();

export const day = date.getDay();
export const month = date.getMonth();
export const year = date.getFullYear();

export function numberOfDaysInMonth(yyyy, mm) {
  return new Date(yyyy, mm + 1, 0).getDate();
}

export function firstDayOfMonth(yyyy, mm) {
  return new Date(yyyy, mm, 0).getDay();
}

export function formatDate(yyyy, mm) {
  const date = new Date(yyyy, mm + 1, 0).toDateString();
  const _month = date.slice(4,7);
  const _year = date.slice(11);
  return `${_month} ${_year}`;
}
