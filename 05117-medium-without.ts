/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-03-08 23:08:02
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-03-08 23:58:56
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]


// ============= Your Code Here =============
// 解法1：遍历判断
// type Includes<T, U extends any[]> = U extends [infer X, ...infer Rest]
//   ? T extends X
//     ? true
//     : Includes<T, Rest>
//   : false;
// type Without<T extends any[], U extends number | any[]> = 
//   U extends number
//     ? T extends [infer First, ...infer Rest]
//       ? First extends U
//         ? [...Without<Rest, U>]
//         : [First, ...Without<Rest, U>]
//       : T
//     : U extends any[]
//       ? T extends [infer First, ...infer Rest]
//         ? Includes<First, U> extends true
//           ? [...Without<Rest, U>]
//           : [First, ...Without<Rest, U>]
//         : T
//       : T;

// 解法2：利用联合类型包含判断
type NumberToUnion<T extends unknown | unknown[]> = T extends unknown[] ? T[number] : T;
type Without<
  T,
  U,
  Acc extends unknown[] = []
> = T extends [infer First, ...infer Rest]
  ? First extends NumberToUnion<U>
    ? Without<Rest, U, Acc>
    : Without<Rest, U, [...Acc, First]>
  : Acc;