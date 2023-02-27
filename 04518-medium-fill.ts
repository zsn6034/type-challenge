/*
 * @Description:
 * @Author: zhuangshunan
 * @Date: 2023-02-27 21:10:56
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-02-27 22:45:20
 */
// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>
];

// ============= Your Code Here =============
// 解法1
// type Fill<
//   T extends unknown[],
//   N,
//   Start extends number = 0,
//   End extends number = T["length"],
//   Res extends any[] = [],
//   Limit extends number = Start
// > = Start extends End
//   ? T
//   // 判断是否收集完毕
//   : Res["length"] extends Limit
//     // 切换开关
//     // 情况1：Res数组的长度=Limit=Start，说明此时已经遍历到Start处，接下来可以进行N值填充过程，设置Limit为End（代表要开始填充了）
//     // 情况2：Res数组的长度=Limit=End，说明此时已经进行完填充过程了，要处理End下标后的元素了，设置Limit为Start（代表要处理End下标后的元素了）
//     ? Fill<T, N, Start, End, Res, Limit extends Start ? End : Start>
//     : T extends [infer Left, ...infer Rest]
//       // 遍历填充当前下标对应元素
//       // 情况1：Limit=End，由上面切换开关设置可知，此时处于填充过程，填充N即可
//       // 情况2：Limit=Start，由上面切换开关设置可知，此时处于Start前的处理或End后的处理，填充原本元素即可
//       ? Fill<Rest, N, Start, End, [...Res, Limit extends End ? N : Left], Limit>
//       : Res;

// 解法2
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  Pending extends any[] = [],
  Filled extends any[] = []
> = T extends [infer L, ...infer R]
  ? [
    // 处理遍历到的第i个元素
      Pending["length"] extends Start
        ? Filled["length"] extends End
          ? L // 遍历到i=Start=End，此时填充原本值
          : N // 遍历到Start<i<End处，此时填充N值
        : L, // 遍历到i<Start或i>End处，此时填充原本值
      // 递归处理i后面的元素
      ...Fill<
        R,
        N,
        Start,
        End,
        Pending["length"] extends Start ? Pending : [...Pending, 0],
        Filled["length"] extends End ? Filled : [0, ...Filled]
      >
    ]
  : [];
