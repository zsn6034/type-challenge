/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-20 15:59:48
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-20 16:00:22
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]


// ============= Your Code Here =============
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
