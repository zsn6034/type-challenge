/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-21 14:26:45
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-21 15:04:35
 */
// ============= Test Cases =============
import type { Alike, Expect } from './test-utils'

declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

const result3 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 123)
  .get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>,
]

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

type Expected3 = {
  name: number
}


// ============= Your Code Here =============
type Chainable<Result = {}> = {
  option<K extends string, V extends any>(
    key: K extends keyof Result ? never : K,
    value: V,
  ): Chainable<Omit<Result, K> & Record<K, V>>;
  get(): Result;
}