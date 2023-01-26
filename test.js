/*
 * @Description: 
 * @Author: zhuangshunan
 * @Date: 2023-01-26 21:44:23
 * @LastEditors: zhuangshunan
 * @LastEditTime: 2023-01-26 21:55:16
 */
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
// const f = (n) => {
// 	if (n === 1) return 1;
// 	if (n === 2) return 1;
// 	return f(n - 1) + f(n - 2);
// };

const f = (n) => {
	let first = 1;
	let second = 0;
	let res = 0;
	for (let i = 0; i < n; i += 1) {
		res = first + second;
		first = second;
		second = res;
	}
	return res;
};

console.log(f(6))