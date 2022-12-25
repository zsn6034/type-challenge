/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2022-12-25 17:53:23
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-25 18:04:33
 */
// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Absolute<0>, "0">>,
  Expect<Equal<Absolute<-0>, "0">>,
  Expect<Equal<Absolute<10>, "10">>,
  Expect<Equal<Absolute<-5>, "5">>,
  Expect<Equal<Absolute<"0">, "0">>,
  Expect<Equal<Absolute<"-0">, "0">>,
  Expect<Equal<Absolute<"10">, "10">>,
  Expect<Equal<Absolute<"-5">, "5">>,
  Expect<Equal<Absolute<-1_000_000n>, "1000000">>,
  Expect<Equal<Absolute<9_999n>, "9999">>
];

// ============= Your Code Here =============
type Absolute<T extends number | string | bigint> =
  `${T}` extends `-${infer Num}` ? Num : `${T}`;


