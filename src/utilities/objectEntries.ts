type Entries<T> = [keyof T, T[keyof T]][];

export const objectEntries = <T extends Record<string, any>>(
  object: T,
): Entries<T> => {
  return Object.entries(object) as Entries<T>;
};
