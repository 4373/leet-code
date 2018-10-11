/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  return new RegExp(`^${p}$`).test(s)
}
console.log(isMatch('mississippi', 'mis*is*p*.'))
console.log(isMatch('aab', 'c*a*b'))
console.log(isMatch('aa', 'a'))
