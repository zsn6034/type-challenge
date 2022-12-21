/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-21 14:09:36
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-21 14:14:34
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]


// ============= Your Code Here =============
// 解法1：数组遍历
// type TupleToUnion<T extends unknown[]> = T[number];
// 解法2：递归
// type TupleToUnion<T> = T extends [infer First, ...infer Rest] ? First | TupleToUnion<Rest> : never;
// 解法3：泛型
type TupleToUnion<T> = T extends Array<infer V> ? V : never;