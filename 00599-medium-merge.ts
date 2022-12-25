/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2022-12-25 21:41:39
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-25 21:49:20
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]


// ============= Your Code Here =============
type Merge<F extends {[K in keyof F]: any}, S> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : F[K];
};
