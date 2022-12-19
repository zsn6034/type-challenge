/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2022-12-17 23:38:07
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-18 00:15:55
 */
// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<"a" | "b" | "c" | "d">, true>>,
  Expect<Equal<IsUnion<undefined | null | void | "">, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | "a">, false>>,
  Expect<Equal<IsUnion<never>, false>>
];

// ============= Your Code Here =============
type IsNever<T> = [T] extends [never] ? true : false;
type IsUnion<T extends any, U = T> = IsNever<T> extends true
  ? false
  : T extends U
  ? [U] extends [T]
    ? false
    : true
  : false;
