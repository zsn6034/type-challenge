/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-20 11:02:47
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-20 11:03:36
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]


// ============= Your Code Here =============
type MyExclude<T, U> = T extends U ? never : T;
