/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2022-12-25 22:06:19
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-25 22:17:32
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]


// ============= Your Code Here =============
type Diff<O extends Record<PropertyKey, unknown>, O1 extends Record<PropertyKey, unknown>> = {
  [K in keyof (Omit<O, keyof O1> & Omit<O1, keyof O>)]: K extends keyof O
    ? O[K]
    : O1[K];
}
