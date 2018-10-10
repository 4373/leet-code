/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  let arr = (x + '')
    .split('')
    .reverse()
    .join('')
  return arr === x + ''
}
console.log(isPalindrome(10))
