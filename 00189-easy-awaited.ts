/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-20 11:20:50
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-20 11:39:18
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>
];

// @ts-expect-error
type error = MyAwaited<number>;

// ============= Your Code Here =============
// type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
//   ? X extends Promise<unknown>
//     ? MyAwaited<X>
//     : X
//   : never;
type MyAwaited<
  T extends Promise<unknown> | { then: (onfulfilled: (arg: any) => any) => any }
> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : T extends { then: (onfulfilled: (arg?: infer K) => any) => any }
  ? K
  : never;
