/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2023-03-29 17:27:15
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-03-29 17:47:39
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
  Expect<Equal<IndexOf<[string, 'a'], 'a'>, 1>>,
  Expect<Equal<IndexOf<[any, 1], 1>, 1>>,
]


// ============= Your Code Here =============
type MyEqual<T, U> =
  T extends U
   ? U extends T
    ? true
    : false
  : false;
type IndexOf<T extends unknown[], U extends unknown, Res extends number[] = []> =
  T extends [infer First, ...infer Rest]
    ? MyEqual<First, U> extends true
      ? Res['length']
      : IndexOf<[...Rest], U, [...Res, 0]>
    : -1;