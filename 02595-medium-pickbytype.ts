/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-20 18:57:46
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-20 19:08:25
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]


// ============= Your Code Here =============
type PickByType<T, U> = {
  [K in keyof T as (T[K] extends U ? K : never )]: T[K]
};