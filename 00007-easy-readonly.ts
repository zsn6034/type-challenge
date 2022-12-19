/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2022-12-19 17:04:44
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-19 17:12:50
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}


// ============= Your Code Here =============
// type MyReadonly<T> = any
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
}
