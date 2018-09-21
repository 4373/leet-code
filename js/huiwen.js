var longestPalindrome = function(s) {
  function isTrue(s) {
    const l = s.length
    const half = Math.floor(l / 2)
    let i = 0
    while (i < half) {
      if (s[i] !== s[l - 1 - i]) {
        return false
      }
      i++
    }
    return true
  }
  let l = s.length
  while (l > 0) {
    let b = 0 // 开始几点
    while (b + l <= s.length) {
      let str = s.substr(b, l)
      if (isTrue(str)) {
        return str
      }
      b++
    }
    l--
  }
  return s
}

let str = 'abcdefghijklmnopqrstuvwxyz'
console.time('me')
let sum = 0
for (let i = 0; i < 10; i++) {
  let num = Math.ceil(Math.random() * 10000) + 1000
  let subStr = ''
  for (let j = 0; j < num; j++) {
    subStr += str[Math.round(Math.random() * 25)]
  }
  subStr += subStr
    .split('')
    .reverse()
    .join('')
  let t = Date.now()
  let res = longestPalindrome(subStr)
  let time = Date.now() - t
  console.log(num, time)

  sum += time
}
// console.timeEnd('me')
console.log('res = ' + sum)
