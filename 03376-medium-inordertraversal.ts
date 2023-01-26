/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-26 16:47:02
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-26 21:28:08
 */
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

const tree2 = {
  val: 1,
  left: null,
  right: null,
} as const

const tree3 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
} as const

const tree4 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  },
} as const

type cases = [
  Expect<Equal<InorderTraversal<null>, []>>,
  Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
  Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
  Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
  Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>,
]


// ============= Your Code Here =============
interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
// 解法1
// type InorderTraversal<T extends TreeNode | null> =
//   T extends null
//     ? []
//     : T extends TreeNode
//       ? T['left'] extends TreeNode
//         ? T['right'] extends TreeNode
//           ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
//           : [...InorderTraversal<T['left']>, T['val']]
//         : T['right'] extends TreeNode
//           ? [T['val'], ...InorderTraversal<T['right']>]
//           : [T['val']]
//       : never;
// 解法2
// type InorderTraversal<T extends TreeNode | null, NT extends TreeNode = NonNullable<T>> =
//   T extends null
//     ? []
//     : [...InorderTraversal<NT['left']>, NT['val'], ...InorderTraversal<NT['right']>];

// 解法3
type InorderTraversal<T extends TreeNode | null> = 
  [T] extends [TreeNode] // []防止分布式行为
    ? [...InorderTraversal<T['left']>, T["val"], ...InorderTraversal<T["right"]>]
    : [];

    
    

    

