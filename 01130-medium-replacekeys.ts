/*
 * @Descripttion: 
 * @Author: zhuangshunan
 * @Date: 2022-12-26 15:41:52
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2022-12-26 16:24:39
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type NodeA = {
  type: 'A'
  name: string
  flag: number
}

type NodeB = {
  type: 'B'
  id: number
  flag: number
}

type NodeC = {
  type: 'C'
  name: string
  flag: number
}

type ReplacedNodeA = {
  type: 'A'
  name: number
  flag: string
}

type ReplacedNodeB = {
  type: 'B'
  id: number
  flag: string
}

type ReplacedNodeC = {
  type: 'C'
  name: number
  flag: string
}

type NoNameNodeA = {
  type: 'A'
  flag: number
  name: never
}

type NoNameNodeC = {
  type: 'C'
  flag: number
  name: never
}

type Nodes = NodeA | NodeB | NodeC
type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC
type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB

type cases = [
  Expect<Equal<ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>, ReplacedNodes>>,
  Expect<Equal<ReplaceKeys<Nodes, 'name', { aa: number }>, NodesNoName>>,
]


// ============= Your Code Here =============
type ReplaceKeys<U, T, Y> = {
  [K in keyof U]: K extends keyof Y
    ? Y[K]
    : K extends T
      ? never
      : U[K]
};
