/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */

var kSimilarity = function(A, B) {
  if (A === B) return 0
  const length = A.length
  if (length === 1) return A === B ? 0 : 1
  else {
    const length = A.length
    let count = 0
    console.log(B.split('').join(' | '))
    console.log('  ')
    console.log(A.split('').join(' | '))
    console.log('  ')
    function best() {
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
          if (
            j > i &&
            A[i] !== A[j] &&
            A[i] !== B[i] &&
            A[i] === B[j] &&
            A[j] === B[i]
          ) {
            A = swap(A, i, j)
            console.log(A.split('').join(' | '), '; ' + i + ' -> ' + j)
            count++
          }
        }
      }
    }
    best()
    while (!second()) {
      best()
    }
    function second() {
      console.log('-----------')
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
          if (j > i && A[i] !== A[j] && A[i] !== B[i]) {
            if (A[i] === B[j] || A[j] === B[i]) {
              A = swap(A, i, j)
              count++
              console.log(A.split('').join(' | '), '; ' + i + ' -> ' + j)
              return false
            }
          }
        }
      }
      return true
    }

    return count
  }
}
function swap(str, i, j) {
  let arr = str.split('')
  let a = arr[i]
  let b = arr[j]
  arr[j] = a
  arr[i] = b
  return arr.join('')
}

// console.log(kSimilarity('abac', 'baca'))
// console.log(kSimilarity('aabc', 'abca'))
// console.log(kSimilarity('aabccb', 'bbcaca'))
console.log(kSimilarity('bccaba', 'abacbc'))
console.log(kSimilarity('abccaacceecdeea', 'bcaacceeccdeaae'))
