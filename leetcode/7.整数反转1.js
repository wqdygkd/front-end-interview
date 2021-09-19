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
    let n = 0
    while (x) {
        n = n * 10 + x % 10
        // x = parseInt(x / 10)
        x = 0 | (x / 10)
    }

    return n > 2147483647 || n < -2147483648 ? 0 : n
}
// @lc code=end

// 1032/1032 cases passed (72 ms)
// Your runtime beats 97.78 % of javascript submissions
// Your memory usage beats 64.73 % of javascript submissions (39.3 MB)
