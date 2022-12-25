/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2022-12-25 21:36:52
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-25 21:40:47
 */
// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<StringToUnion<"">, never>>,
  Expect<Equal<StringToUnion<"t">, "t">>,
  Expect<Equal<StringToUnion<"hello">, "h" | "e" | "l" | "l" | "o">>,
  Expect<
    Equal<
      StringToUnion<"coronavirus">,
      "c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s"
    >
  >
];

// ============= Your Code Here =============
type StringToUnion<T extends string> = T extends `${infer X}${infer Rest}`
  ? X | StringToUnion<Rest>
  : never;
