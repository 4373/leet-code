/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.words = {}
  this.cache = {}
}

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let len = word.length
  let words = this.words
  if (!words[len]) {
    words[len] = {}
  }
  let data = words[len]
  if (data[word]) {
    return
  }
  data[word] = true
}

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  let cache = this.cache
  if (cache[word]) {
    return true
  }
  let words = this.words
  let len = word.length
  let data = words[len]
  if (!data) {
    return false
  }
  if (data[word]) {
    return true
  }
  let reg = new RegExp(`^${word.replace(/\./g, '[a-z]')}$`)
  for (let key in data) {
    if (reg.test(key)) {
      cache[word] = true
      return true
    }
  }
  return false
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
