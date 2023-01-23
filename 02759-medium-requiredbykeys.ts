/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-23 11:01:51
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-23 11:06:50
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
]


// ============= Your Code Here =============
type Merge<T> = {
  [K in keyof T]: T[K];
};
type RequiredByKeys<T, K extends keyof T = keyof T> = Merge<
  {
    [P in keyof T as P extends K ? P : never]-?: T[P];
  } & {
    [P in keyof T as P extends K ? never : P]: T[P];
  }
>;
