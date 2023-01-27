/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-27 21:46:23
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-27 21:49:08
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
]


// ============= Your Code Here =============
type GreaterThan<
  T extends number,
  U extends number,
  A extends number[] = [],
> = A['length'] extends T
  ? false
  : A['length'] extends U
    ? true
    : GreaterThan<T, U, [0, ...A]>;
