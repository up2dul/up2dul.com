import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

//#region cn
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//#endregion cn

//#region getCurrentTime
function padTo2Digits(num: number) {
  return String(num).padStart(2, '0');
}

const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const d = new Date(
  new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }),
);

function getCurrentTime() {
  const day = days[d.getDay()] as string;
  const hoursMinutes =
    padTo2Digits(d.getHours()) + ':' + padTo2Digits(d.getMinutes());

  return `${day}, ${hoursMinutes}`;
}
//#endregion getCurrentTime

export { cn, getCurrentTime };
