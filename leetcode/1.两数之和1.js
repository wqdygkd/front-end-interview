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
    let map = new Map()
    let len = nums.length
    map.set(nums[0], 0)
    for (var i = 1; i < len; i++) {
        let other = target - nums[i]
        if (map.has(other)) return [map.get(other), i]
        map.set(nums[i], i)
    }
};
// @lc code=end

// 55/55 cases passed (68 ms)
// Your runtime beats 93.73 % of javascript submissions
// Your memory usage beats 16.48 % of javascript submissions (40.3 MB)
