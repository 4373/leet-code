function twoSum(nums, target) {
  const a = {}
  for (let i = 0; i < nums.length; i++) {
    const t = target - nums[i]
    if (a[t] !== undefined) {
      return [a[t], i]
    }
    a[nums[i]] = i
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
