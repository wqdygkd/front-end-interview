/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let i = 0
    let j = 0
    let arr = []
    while(true) {
        let l1i = l1[i]
        let l2i = l2[i]
        if (l1i === undefined && l1i === undefined) {
            if (j) {
                arr[i + 1] = 1
            }
            break
        }
        l1i = l1i || 0
        l2i = l2i || 0
        let sum = l1i + l2i + j
        j = 0
        if (sum < 10) {
            arr[i] = sum
        } else {
            arr[i] = sum % 10
            j = 1
        }
        i += 1
    }
    return arr
};

// @lc code=end

