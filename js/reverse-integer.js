/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let start = -(2 ** 31)
  let end = 2 ** 31 - 1
  if (x <= start || x > end) return 0
  let str = Math.abs(x) + ''
  let y = str
    .split('')
    .reverse()
    .join('')
  return x > 0 ? (y > end ? 0 : +y) : -y < start ? 0 : -y
}
console.log(reverse(1534236469))
