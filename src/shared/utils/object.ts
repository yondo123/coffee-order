export const isEmptyObject = (obj: object | undefined | unknown[]): boolean => {
  if (!obj || typeof obj !== 'object') {
    return true;
  }

  if (Array.isArray(obj) && !obj.length) {
    return true;
  }
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};
