/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-05 22:43:06
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-05 23:01:26
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
  Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]


// ============= Your Code Here =============
// 解法1
// type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}`
//   ? DropChar<`${L}${R}`, C>
//   : S;
// 解法2
// type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}`
//   ? `${L}${DropChar<R, C>}`
//   : S;
// 解法3
type DropChar<S, C extends string> = S extends `${infer L}${infer R}`
  ? L extends C
    ? DropChar<R, C>
    : `${L}${DropChar<R, C>}`
  : S;