/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-03-11 11:42:06
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-03-11 11:46:24
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Trunc<0.1>, '0'>>,
  Expect<Equal<Trunc<1.234>, '1'>>,
  Expect<Equal<Trunc<12.345>, '12'>>,
  Expect<Equal<Trunc<-5.1>, '-5'>>,
  Expect<Equal<Trunc<'1.234'>, '1'>>,
  Expect<Equal<Trunc<'-10.234'>, '-10'>>,
  Expect<Equal<Trunc<10>, '10'>>,
]


// ============= Your Code Here =============
type NumToStr<T extends number> = `${T}`;
type Trunc<T> = T extends number
  ? Trunc<NumToStr<T>>
  : T extends `${infer First}.${infer Rest}`
    ? First
    : T;
