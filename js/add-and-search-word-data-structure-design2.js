
var WordDictionary = function() {
    this.value = {}
};


WordDictionary.prototype.addWord = function(word) {
  let b = ''
  for(let i = 0; i < word.length; i++) {
    b += `.${word[i]}`
    const a = eval(`this.value${b}`)
    if(a === undefined) {
      eval(`this.value${b} = {_: '${word}'}`)
    }
  }
};



WordDictionary.prototype.search = function(word) {
  let obj = JSON.parse(JSON.stringify(this.value))
  let arr = [obj]
  let res = {}
  let count = 0
  while(arr.length > 0) {
    const newarr = []
    res[count] = ''
    arr.forEach((item, key) => {
      for(let i in item) {
        res[count] += i
        newarr.push(item[i])
      }
    })
    if(res[count] === '') delete res[count]
    count++
    arr = newarr
  }
  
  console.log(res)
  for (let i = 0; i < word.length; i++) {
    if(!word[i].includes('.')) {
      if(!res[i].includes(word[i])) return false
    }
  }
  return true
};
const obj = new WordDictionary()
obj.addWord('meihuan')
obj.addWord('mifd')
obj.addWord('jm')
console.log(obj.search('m'))

