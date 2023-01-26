/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-26 12:19:17
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-26 12:36:15
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]


// ============= Your Code Here =============
// 解法1
// type BEM<B extends string, E extends string[], M extends string[]> =
//   E extends []
//     ? M extends []
//       ? B
//       : `${B}--${M[number]}`
//     : M extends []
//       ? `${B}__${E[number]}`
//       : `${B}__${E[number]}--${M[number]}`;
// 解法2
type BEM<B extends string, E extends string[], M extends string[]> =
  `${B}${E extends [] ? '' : `__${E[number]}`}${M extends [] ? '' : `--${M[number]}`}`;
