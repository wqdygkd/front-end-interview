/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // return s.reverse()
    const l = s.length

    for (let i = 0; i < l / 2; i++) {
        const f = s[i]
        s[i] = s[l - i - 1]
        s[l - i - 1] = f
    }

    return s
};
// @lc code=end

// 477/477 cases passed (72 ms)
// Your runtime beats 99.5 % of javascript submissions
// Your memory usage beats 21.68 % of javascript submissions (47.9 MB)
