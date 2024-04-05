import type { Nil } from './common-types';

export const APP_URL = 'https://next';
export const APP_TITLE = 'Next Book Store';
export const APP_DESCRIPTION = `${APP_TITLE} is a simple book store with Next.js`;
export const APP_REPOSITORY_URL = 'https://github.com';

export const createMockArray = (length: number) => {
  return Array.from(Array(length).keys());
};

export const isNil = (value: unknown): value is Nil => {
  return value === null || value === undefined;
};
