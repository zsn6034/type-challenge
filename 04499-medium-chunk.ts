/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-29 22:05:04
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-29 22:36:20
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]


// ============= Your Code Here =============
// 解法1
// type Chunk<
//   T extends any[],
//   N extends number,
//   S extends any[] = [],
//   ALL extends any[] = [],
// > = T extends [infer F, ...infer R]
//   ? S['length'] extends N
//     ? Chunk<T, N, [], [...ALL, S]>
//     : Chunk<R, N, [...S, F], ALL>
//   : S['length'] extends 0
//     ? []
//     : [...ALL, S];
// 解法2
type Chunk<
  T extends any[],
  N extends number,
  C extends any[] = [],
> = C['length'] extends N
  ? [C, ...Chunk<T, N, []>]
  : T extends [infer F, ...infer R]
    ? Chunk<R, N, [...C, F]>
    : C extends []
      ? []
      : [C] // 没乘除的情况，处理尾部

