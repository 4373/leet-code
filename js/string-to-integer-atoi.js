var myAtoi = function(str) {
  str = parseInt(str)
  if (Object.is(str, NaN)) return 0
  let start = -(2 ** 31)
  let end = 2 ** 31 - 1
  if (str < start) return start
  if (str > end) return end
  return str
}
console.log(myAtoi('words and 987'))
console.log(myAtoi('4193 with words'))
console.log(myAtoi('-91283472332'))
