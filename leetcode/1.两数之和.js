/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let a
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                a = [i, j]
                break
            }
        }
        if (a) break
    }
    return a
};
// @lc code=end

// 55/55 cases passed (120 ms)
// Your runtime beats 33.77 % of javascript submissions
// Your memory usage beats 59.17 % of javascript submissions (39 MB)
