/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-20 11:45:44
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-20 11:46:08
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>


// ============= Your Code Here =============
type If<C extends boolean, T, F> = C extends true ? T : F;
