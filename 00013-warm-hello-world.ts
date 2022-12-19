/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2022-12-19 17:13:38
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-19 17:14:02
 */
// ============= Test Cases =============
import type { Equal, Expect, NotAny } from './test-utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]


// ============= Your Code Here =============
type HelloWorld = string // expected to be a string
