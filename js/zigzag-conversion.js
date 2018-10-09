/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1 || s.length < 3) return s
  let str = ''
  let row = 0
  while (row < numRows) {
    let now = row
    while (s[now] !== undefined) {
      let insert = ''
      str += s[now]
      if (row !== 0 && row !== numRows - 1) {
        let p = now + (numRows - 1 - row) * 2
        if (s[p]) {
          insert = s[p]
        }
        str = str + insert
      }
      now = (numRows - 1) * 2 + now
    }
    row++
  }
  return str
}
// console.log(convert('PAYPALISHIRING', 4))
// console.log(convert('A', 1))
console.log(convert('ABC', 2))
