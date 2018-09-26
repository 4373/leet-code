/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const obj = {}
  for (let i = 0; i < nums1.length; i++) {
    obj[nums1[i]] = nums1[i]
  }
  let res = {}
  for (let i = 0; i < nums2.length; i++) {
    if (obj[nums2[i]] !== undefined) {
      res[nums2[i]] = nums1[i]
    }
  }
  return Object.values()
}
