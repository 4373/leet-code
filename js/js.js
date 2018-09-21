function one(s) {
  let startstr = ''
  let startindex = 0
  let length = 1

  const res = []
  for (let i = 0; i < s.length; i++) {
    if (startstr !== s[i]) {
      startstr = s[i]
      if (length >= 3) {
        res.push([startindex, i - 1])
      }
      length = 1
      startindex = i
    } else {
      length++
    }
  }
  if (s[s.length - 1] === startstr && length >= 3) {
    res.push([startindex, length + startindex - 1])
  }
  return res
}
function two(S) {
  let str = ''
  for (let i = 0; i < S.length; i++) {
    if (/\d/.test(S[i])) {
      str += S[i]
    }
  }
  const end = str.substr(-4)
  console.log(str)
  if (str.length <= 10) {
    return '***-***-' + end
  } else {
    return '+' + '*'.repeat(str.length - 10) + '-***-***-' + end
  }
}

function three(N) {}
console.log(two('(3906)2 07143 711'))
