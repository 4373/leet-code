/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let z = {},
    f = {},
    zero = 0,
    zz = 0,
    ff = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      if (z[nums[i]] === undefined) {
        z[nums[i]] = 1
      } else {
        z[nums[i]]++
      }
      zz++
    } else if (nums[i] < 0) {
      if (f[nums[i]] === undefined) {
        f[nums[i]] = 1
      } else {
        f[nums[i]]++
      }
      ff++
    } else {
      zero++
    }
  }
  if (zz === 0 || ff === 0) return zero > 2 ? [[0, 0, 0]] : []
  let res = []
  let diff = {}
  for (let i in z) {
    i = +i
    for (let j in f) {
      j = +j
      let r = 0 - (i + j) //
      if (z[r] != undefined) {
        // r > 0
        let name1 = i + '+' + r
        name2 = r + '+' + i
        if (diff[name1] || diff[name2]) break
        else {
          diff[name1] = true
          diff[name2] = true
        }
        if (r === i) {
          if (z[i] >= 2) {
            res.push([j, i, i])
          }
        } else {
          res.push(i > r ? [j, r, i] : [j, i, r])
        }
      } else if (f[r] !== undefined) {
        // r< 0
        let name1 = j + '+' + r
        name2 = r + '+' + j
        if (diff[name1] || diff[name2]) break
        else {
          diff[name1] = true
          diff[name2] = true
        }
        if (r === j) {
          if (f[j] >= 2) res.push([j, j, i])
        } else {
          res.push(j > r ? [r, j, i] : [j, r, i])
        }
      } else if (r === 0) {
        // r = 0
        let name = i + 'end'
        if (diff[name]) break
        else diff[name] = true
        if (zero > 0) res.push([j, 0, i])
      }
    }
  }
  if (zero > 2) res.push([0, 0, 0])
  return res
}
console.log(JSON.stringify(threeSum([3, 0, -2, -1, 1, 2])))
console.log(
  JSON.stringify(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]))
)

console.log(
  JSON.stringify(
    threeSum([-1, -2, -3, 4, 1, 3, 0, 3, -2, 1, -2, 2, -1, 1, -5, 4, -3])
  )
)
