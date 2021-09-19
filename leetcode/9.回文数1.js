/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    let n = 0
    let t = x
    while(t) {
        n = n * 10 + t % 10
        t = 0 | t / 10
    }
    if (x === n) return true
    return false
};
// @lc code=end

// 11510/11510 cases passed (164 ms)
// Your runtime beats 86.92 % of javascript submissions
// Your memory usage beats 98.39 % of javascript submissions (46 MB)
