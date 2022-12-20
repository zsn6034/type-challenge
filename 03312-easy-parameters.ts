/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-20 16:58:09
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-20 16:58:46
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
const baz = (): void => {};

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];

// ============= Your Code Here =============
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer X
) => any
  ? X
  : never;
