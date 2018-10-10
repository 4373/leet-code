function ListNode(val) {
  this.val = val
  this.next = null
}
function t(arr) {
  arr = arr.reverse()
  let res = new ListNode(arr[0])
  for (let i = 1; i < arr.length; i++) {
    let temp = new ListNode(arr[i])
    temp.next = res
    res = temp
  }
  return res
}
var addTwoNumbers = function(l1, l2) {
  let over = 0
  let ans = []
  while (l1 || l2 || over) {
    if (!l1) l1 = { val: 0, next: null }
    if (!l2) l2 = { val: 0, next: null }
    let sum = l1.val + l2.val + over
    ans.push(sum % 10)
    over = sum > 9 ? 1 : 0
    l1 = l1.next
    l2 = l2.next
  }
  return ans
}
console.log(addTwoNumbers(t([2, 4, 3]), t([5, 6, 4])))
