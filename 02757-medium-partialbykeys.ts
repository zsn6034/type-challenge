/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-23 10:21:01
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-23 11:00:50
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  // @ts-expect-error
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
]


// ============= Your Code Here =============
type Merge<T> = {
  [K in keyof T]: T[K];
}
type PartialByKeys<T, K extends keyof T = keyof T> = Merge<
  {
    [P in keyof T as P extends K ? P : never]?: T[P];
  } & {
    [P in keyof T as P extends K ? never : P]: T[P];
  }
>;

// type a = PartialByKeys<User, 'name'>;
