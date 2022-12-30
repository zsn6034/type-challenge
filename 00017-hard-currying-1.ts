/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-30 14:47:38
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-30 15:30:46
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

const curried1 = Currying((a: string, b: number, c: boolean) => true);
const curried2 = Currying(
  (
    a: string,
    b: number,
    c: boolean,
    d: boolean,
    e: boolean,
    f: string,
    g: boolean
  ) => true
);
const curried3 = Currying(() => true);

type cases = [
  Expect<
    Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>
  >,
  Expect<
    Equal<
      typeof curried2,
      (
        a: string
      ) => (
        b: number
      ) => (
        c: boolean
      ) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
    >
  >,
  Expect<Equal<typeof curried3, () => true>>
];

// ============= Your Code Here =============
type Gurryed<Fn> = Fn extends (...args: infer Args) => infer R
  ? Args extends [infer F, ...infer L]
    ? L['length'] extends 0
      ? (a: F) => R
      : (a: F) => Gurryed<(...args: L) => R>
    : () => R
  : never;

declare function Currying<F>(fn: F): Gurryed<F>;
