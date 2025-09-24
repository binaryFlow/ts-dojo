type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type MyPick<T, K extends keyof T> = {
  [U in K]: T[U];
};

type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

type MyOmit<T, K extends keyof any> = MyPick<T, Exclude<keyof T, K>>;

type MyRecord<K extends keyof any, V> = {
  [P in K]: V;
};

type MyNonNullable<T> = T extends null | undefined ? never : T;

interface User {
  id: number;
  name: string;
  email: string;
}
type PARTIAL = MyPartial<User>;
type READONLY = MyReadonly<User>;
type PICK = MyPick<User, "id" | "name">;

type REQUIRED = MyRequired<PARTIAL>;
type NONNULL = MyNonNullable<string | null>;
type OMIT = MyOmit<User, "email">;
