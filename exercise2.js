function func (str, obj) {
  for (let key in obj) {
    if ( str == key) {
     return true
    }
  }
  return false
}
  

let result = func("word", {fdsf: "string", word: "word", dafd: 343});
console.log(result);