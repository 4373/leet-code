/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let start = 0
  let end = height.length - 1
  let area = 0
  while (start < end) {
    let h = Math.min(height[start], height[end])
    area = h * (end - start) > area ? h * (end - start) : area
    height[start] > height[end] ? end-- : start++
  }
  return area
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
