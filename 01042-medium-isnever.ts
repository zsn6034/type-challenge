/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2022-12-25 22:39:56
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-25 22:40:12
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]


// ============= Your Code Here =============
type IsNever<T> = [T] extends [never] ? true : false;