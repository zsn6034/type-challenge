/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-26 18:37:04
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-26 19:10:43
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
  [key: string]: any
  foo(): void
}

type Bar = {
  [key: number]: any
  bar(): void
  0: string
}

const foobar = Symbol('foobar')
type FooBar = {
  [key: symbol]: any
  [foobar](): void
}

type Baz = {
  bar(): void
  baz: string
}

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>,
]


// ============= Your Code Here =============
// keyof {[key: string]: any} 得到 string | number
// keyof {[key: number]: any} 得到 numebr
// keyof {[key: symbol]: any} 得到 symbol
// 关键点是区分上述的索引签名(string | number | symbol)和普通的key
// 解法1
// type RemoveIndexSignature<T> = {
//   [K in keyof T as string extends K ? never : number extends K ? never: symbol extends K ? never: K]: T[K]
// }
// 解法2：递归
type IndexTypes = [string, number, symbol];
type IsIndexType<T, U = IndexTypes> = U extends [infer Start, ...infer Rest] ? Start extends T ? true : IsIndexType<T, Rest> : false;
type RemoveIndexSignature<T> = {
  [K in keyof T as (IsIndexType<K> extends true ? never : K)]: T[K];
}
