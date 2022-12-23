/*
 * @Descripttion:
 * @Author: zhuangshunan
 * @Date: 2022-12-23 10:56:49
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-23 11:03:35
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
  // @ts-expect-error
  AppendArgument<unknown, undefined>
];

// ============= Your Code Here =============
type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
  ...args: infer X
) => infer T
  ? (...args: [...X, A]) => T
  : never;
