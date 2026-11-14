export type allows_any<T> = T & {
  [key: string]: any;
};