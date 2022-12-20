/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-20 16:52:30
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-20 16:52:46
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]


// ============= Your Code Here =============
type Push<T extends unknown[], U> = [...T, U];
