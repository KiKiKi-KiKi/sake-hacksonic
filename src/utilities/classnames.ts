const nonNullableOrFalseFilter = <T>(value: T): value is NonNullable<T> =>
  value !== null && value !== undefined && value !== false;

export const classnames = (
  ...args: (string | undefined | null | boolean)[]
): string => {
  if (!args.length) {
    return '';
  }

  return args.filter(nonNullableOrFalseFilter).join(' ').trim();
};
