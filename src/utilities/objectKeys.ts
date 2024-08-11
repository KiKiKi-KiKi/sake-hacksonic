export const objectKeys = <T extends { [key: string]: unknown }>(
  obj: T,
): (keyof T)[] => {
  const res = Object.keys(obj);

  return res;
};
