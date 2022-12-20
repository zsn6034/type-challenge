/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-20 17:06:49
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-20 18:02:24
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}


// ============= Your Code Here =============
// 解法1
// type MyOmit<T, K extends keyof T> = {
//   [P in keyof T as P extends K ? never : P]: T[P];
// }
// 解法2
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>