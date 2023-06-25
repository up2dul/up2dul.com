import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

//#region cn
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//#endregion cn

//#region selectField
function selectField<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as Pick<T, K>);
}
//#endregion selectField

export { cn, selectField };
