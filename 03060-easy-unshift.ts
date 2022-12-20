/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-20 16:52:50
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-20 16:53:07
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]


// ============= Your Code Here =============
type Unshift<T extends unknown[], U> = [U, ...T];
