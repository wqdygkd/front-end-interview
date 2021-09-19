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
    let str = x.toString()
    if (str === str.split('').reverse().join('')) return true
    return false
};
// @lc code=end

// 11510/11510 cases passed (204 ms)
// Your runtime beats 35.69 % of javascript submissions
// Your memory usage beats 97.41 % of javascript submissions (46.1 MB)

