/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-21 15:44:10
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-21 15:50:30
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
]


// ============= Your Code Here =============
type LookUp<U, T extends string> = U extends { type: T } ? U : never;

