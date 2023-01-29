/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-29 21:52:12
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-29 22:02:26
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
]


// ============= Your Code Here =============
// 考虑3点：
// 1. never的判断
// 2. 元组为readonly
// 3. 元祖的长度是有限的，其length属性返回数字字面量，数组的length属性返回number
type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly any[]
    ? number extends T['length']
      ? false
      : true
    : false;
