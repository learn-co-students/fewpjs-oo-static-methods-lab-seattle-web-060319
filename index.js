class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

   static sanitize(str) {
     return str.replace(/[^A-Za-z0-9-'-' ']+/g, '')
   } 
  
static titleize(str) {
  let arr = str.split(' '); 
  let newArr = []
  let exception = ['the', 'a', 'but', 'of', 'an', 'and', 'for', 'at', 'by', 'from']
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
      } else if (exception.includes(arr[i])) {
        newArr.push(arr[i])
      } else {
        newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
        console.log(newArr)
      }
    
   }
   let newStr = newArr.join(' ')
   return (newStr)
}
}