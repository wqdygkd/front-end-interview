/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums2 = Array.from(new Set(nums2))
    const arr = []
    for (const item of nums2) {
        if (nums1.includes(item)) {
            arr.push(item)
        }
    }
    return arr
};
// @lc code=end

