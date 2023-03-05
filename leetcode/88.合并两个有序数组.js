/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    do {
        let n1 = !m ? -Infinity : nums1[m - 1]
        let n2 = !n ? -Infinity : nums2[n - 1]

        if (n1 > n2) {
            nums1[m + n - 1] = n1
            m > 0 ? m -= 1 : ''
        } else {
            nums1[m + n - 1] = n2
            n > 0 ? n -= 1 : ''
        }
    } while(m || n)
    return nums1
};
// @lc code=end

// 59/59 cases passed (64 ms)
// Your runtime beats 92.06 % of javascript submissions
// Your memory usage beats 87.53 % of javascript submissions (37.7 MB)
