/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
  let str = strs[0]
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(str)) {
      str = str.slice(0, -1)
      if (str === '') return ''
    }
  }
  return str
}
console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
