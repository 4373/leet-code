var isToeplitzMatrix = function(matrix) {
  let item = matrix[0]
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i].slice(1).join('') !== item.slice(0, -1).join('')) {
      return false
    }
    item = matrix[i]
  }
  return true
}
console.log(isToeplitzMatrix([[1, 2], [2, 2]]))
