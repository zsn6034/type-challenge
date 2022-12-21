/*
 * @Descripttion:
 * @Author: zhuangshunan
 * @Date: 2022-12-21 15:09:05
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-21 15:11:23
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>
];

// ============= Your Code Here =============
type Pop<T extends any[]> = T extends [...infer Rest, infer _] ? Rest : [];
