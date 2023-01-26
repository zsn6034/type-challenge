/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-26 21:37:33
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-26 22:02:49
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]


// ============= Your Code Here =============
type Fibonacci<
  T extends number,
  A extends number[] = [0],
  B extends number[] = [],
  Count extends number[] = [0],
> = T extends Count['length']
  ? [...A, ...B]['length']
  : Fibonacci<T, B, [...A, ...B], [0, ...Count]>;

 

// JS版
// const f = (n) => {
//   let first = 1;
//   let second = 0;
//   let res = 0;
//   for (let i = 0; i < n; i += 1) {
//     res = first + second;
//     first = second;
//     second = res;
//   }
//   return res;
// };

