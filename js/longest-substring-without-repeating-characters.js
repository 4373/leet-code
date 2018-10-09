var lengthOfLongestSubstring = function(s) {
  let c = ''
  let l = 0
  for (let i = 0; i < s.length; i++) {
    const index = c.indexOf(s[i])
    if (index !== -1) {
      c = c.substring(index + 1) + s[i]
    } else {
      c = c + s[i]
      l = Math.max(c.length, l)
    }
  }
  return l
}

console.log(lengthOfLongestSubstring('aabaab!bb')) // 3
console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring('anviaj')) // 5
