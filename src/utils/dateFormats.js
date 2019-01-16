export const daysArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
export const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const date = new Date();

export const year = date.getFullYear();
export const day = date.getDay();
export const month = date.getMonth();

export function numberOfDaysInMonth(yyyy, mm) {
  return new Date(yyyy, mm, 0).getDate();
}

export function firstDayOfMonth(yyyy, mm) {
  return new Date(yyyy, mm, 0).getDay();
}


