/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-20 18:03:46
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-20 18:18:45
 */
// ============= Test Cases =============
import type { Alike, Expect } from './test-utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}


// ============= Your Code Here =============
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [Key in K]: T[Key];
// } & { [Key in Exclude<keyof T, K>]: T[Key] };
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [Key in K]: T[Key];
// } & Omit<T, K>;
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [Key in K]: T[Key];
} & Pick<T, Exclude<keyof T, K>>;