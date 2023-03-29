/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2023-03-29 19:23:33
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-03-29 19:33:59
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
]


// ============= Your Code Here =============
type Join<T extends string[], U extends number | string, Res extends string = ''> =
  T extends [infer First extends string, ...infer Rest extends string[]]
    ? Join<Rest, U, `${Res}${Res extends '' ? '' : U}${First}`>
    : Res;