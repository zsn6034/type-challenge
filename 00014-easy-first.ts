/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2022-12-19 22:17:52
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-19 22:41:32
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]


// ============= Your Code Here =============
// type First<T extends any[]> = any
// 解法1
// type First<T extends any[]> = T extends [] ? never : T[0];
// 解法2
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0];
// 解法3
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
// 解法4
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;
 