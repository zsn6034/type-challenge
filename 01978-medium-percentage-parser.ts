/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-26 19:17:53
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-26 20:16:24
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Case0 = ['', '', '']
type Case1 = ['+', '', '']
type Case2 = ['+', '1', '']
type Case3 = ['+', '100', '']
type Case4 = ['+', '100', '%']
type Case5 = ['', '100', '%']
type Case6 = ['-', '100', '%']
type Case7 = ['-', '100', '']
type Case8 = ['-', '1', '']
type Case9 = ['', '', '%']
type Case10 = ['', '1', '']
type Case11 = ['', '100', '']

type cases = [
  Expect<Equal<PercentageParser<''>, Case0>>,
  Expect<Equal<PercentageParser<'+'>, Case1>>,
  Expect<Equal<PercentageParser<'+1'>, Case2>>,
  Expect<Equal<PercentageParser<'+100'>, Case3>>,
  Expect<Equal<PercentageParser<'+100%'>, Case4>>,
  Expect<Equal<PercentageParser<'100%'>, Case5>>,
  Expect<Equal<PercentageParser<'-100%'>, Case6>>,
  Expect<Equal<PercentageParser<'-100'>, Case7>>,
  Expect<Equal<PercentageParser<'-1'>, Case8>>,
  Expect<Equal<PercentageParser<'%'>, Case9>>,
  Expect<Equal<PercentageParser<'1'>, Case10>>,
  Expect<Equal<PercentageParser<'100'>, Case11>>,
]


// ============= Your Code Here =============
type Sign<S extends string> = S extends `${infer X extends '+' | '-'}${infer _}` ? X : '';
type Unit<S extends string> = S extends `${infer _}%` ? '%' : '';
type TrimSign<S extends string> = S extends `${'+' | '-'}${infer Suffix}` ? Suffix : S;
type TrimUnit<S extends string> = S extends `${infer Prefix}%` ? Prefix : S;
type PercentageParser<S extends string> = [Sign<S>, TrimSign<TrimUnit<S>>, Unit<S>];