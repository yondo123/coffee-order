export const isEmptyObject = (obj: object | undefined): boolean => {
  if (!obj) {
    return true;
  }
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};
