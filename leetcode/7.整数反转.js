/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = parseInt(x.toString().split('').reverse().join(''))
    if (x < 0)
    num = -num
    return num > 2147483647 || num < -2147483648 ? 0 : num
};
// @lc code=end

// 1032/1032 cases passed (88 ms)
// Your runtime beats 63.82 % of javascript submissions
// Your memory usage beats 29.63 % of javascript submissions (39.5 MB)
