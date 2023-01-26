/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-24 22:39:40
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-26 11:12:50
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>,
]

type errors = [
  // @ts-expect-error
  FlipArguments<'string'>,
  // @ts-expect-error
  FlipArguments<{ key: 'value' }>,
  // @ts-expect-error
  FlipArguments<['apple', 'banana', 100, { a: 1 }]>,
  // @ts-expect-error
  FlipArguments<null | undefined>,
]


// ============= Your Code Here =============
type AnyFn = (...args: any[]) => any;
type Reverse<T extends any[]> =
  T extends [...infer X, infer Last] ? [Last, ...Reverse<X>] : [];
// 方法1
// type FlipArguments<T extends AnyFn> = T extends (...args: infer Args) => infer ReturnType
//   ? (...args: Reverse<Args>) => ReturnType
//   : never;
// 方法2
type InferFunctionArguments<T extends AnyFn> = T extends (...args: infer Args) => any
  ? Args
  : never;

type FlipArguments<T extends AnyFn, Args extends any[] = InferFunctionArguments<T>> = (...args: Reverse<Args>) => ReturnType<T>;

// type a = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>;