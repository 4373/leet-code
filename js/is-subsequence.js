function test(s, t) {
  if (s === '') return true
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[0]) {
      s = s.slice(1)
    }
    if (s === '') return true
  }
  return false
}
console.log(test())
