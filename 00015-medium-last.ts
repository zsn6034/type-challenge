/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-21 15:06:26
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-21 15:07:26
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]


// ============= Your Code Here =============
type Last<T extends any[]> = T extends [...infer Rest, infer Last] ? Last : never;
