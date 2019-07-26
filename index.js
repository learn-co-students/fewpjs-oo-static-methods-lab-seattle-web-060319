class Formatter {
  static capitalize(string){
    let firstLetter = string.charAt(0).toUpperCase()
    let restOfString = string.slice(1)
    return firstLetter + restOfString
  }
  static sanitize(string){
    string = string.replace(/[^a-z0-9áéíóúñü '-]/gim,"");
    return string.trim();
  }
  static titleize(string){
    const exemptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = string.split(' ')
    arr[0] = this.capitalize(arr[0])
    for (let i = 1; i < arr.length; i++) {
      let flag = false
      const curword = arr[i];
      for (let j = 0; j < exemptWords.length; j++) {
        const exempt = exemptWords[j];
        if(exempt == curword){
          flag = true
        }
      }
      if(flag === false){
        arr[i] = this.capitalize(arr[i])
      }
    }
    return arr.join(' ')
  }
}