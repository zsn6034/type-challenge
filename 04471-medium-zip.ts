/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-27 21:50:02
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-27 21:53:41
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]


// ============= Your Code Here =============
type Zip<T extends unknown[], U extends unknown[]> =
  T extends [infer F1, ...infer R1]
    ? U extends [infer F2, ...infer R2]
      ? [[F1, F2], ...Zip<R1, R2>]
      : []
    : [];
