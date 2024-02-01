export const isRelativeUrl = (url: string): boolean => {
  const reg = new RegExp('^(?:[a-z+]+:)?//', 'i');
  return !reg.test(url);
};

export default {};
