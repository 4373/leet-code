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

