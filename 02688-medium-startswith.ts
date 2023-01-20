/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-20 19:09:31
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-20 19:14:13
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,
  Expect<Equal<StartsWith<'', ''>, true>>,
]


// ============= Your Code Here =============
// 解法1
// type StartsWith<T extends string, U extends string> = 
//   U extends ''
//     ? true
//     : T extends `${infer First}${infer Rest1}`
//       ? U extends `${First}${infer Rest2}`
//         ? StartsWith<Rest1, Rest2>
//         : false
//       : false;
// 解法2
type StartsWith<T extends string, U extends string> = 
  T extends `${U}${infer Rest}` ? true : false;