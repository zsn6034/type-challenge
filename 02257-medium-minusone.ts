/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-17 22:49:31
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-17 23:39:24
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
]


// ============= Your Code Here =============
type MinusOneHelper<T extends number, A extends unknown[] = []> = 0 extends 1
  ? never
  : ['', ...A]['length'] extends T
    ? A['length']
    : MinusOneHelper<T, ['', ...A]>;
type MinusOne<T extends number> = T extends 0
  ? -1
  : MinusOneHelper<T>;
