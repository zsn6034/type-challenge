/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-26 11:14:12
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-26 11:46:32
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
]


// ============= Your Code Here =============
type FlattenOne<T extends unknown[]> =
  T extends [infer First, ...infer Last]
  ? First extends unknown[]
    ? [...First, ...FlattenOne<Last>]
    : [First, ...FlattenOne<Last>]
  : [];

type FlattenDepth<
  T extends unknown[],
  N extends number = 1,
  Inc extends number[] = [],
> = T extends FlattenOne<T>
  ? T
  : N extends Inc['length']
    ? T
    : FlattenDepth<FlattenOne<T>, N, [0, ...Inc]>;
  
// type a = FlattenDepth<[1, [2]]>

