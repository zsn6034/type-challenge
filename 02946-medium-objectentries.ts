/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-23 11:15:52
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-24 17:03:57
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
]


// ============= Your Code Here =============
type ObjectEntries<T, K = keyof T> = K extends keyof T
  ? [K, T[K] extends undefined ? undefined : Required<T>[K]]
  : never;

// type A<T, K = keyof T> = K extends keyof T ? T[K] : never;

// type a = A<Model>