/*
 * @Descripttion:
 * @Author: zhuangshunan
 * @Date: 2022-12-23 18:14:12
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-23 18:30:14
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
];

// ============= Your Code Here =============
// 思路：转换为数组后，调用其length属性即可
// 解法1：定义一个StrToArr类型
// type StrToArr<S extends string> = S extends `${infer First}${infer Rest}` ? [First, ...StrToArr<Rest>] : [];
// type LengthOfString<S extends string> = StrToArr<S>['length'];

// 解法2：递归
type LengthOfString<
  S extends string,
  U extends any[] = []
> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [First, ...U]>
  : U['length'];
