function firstToUpper(string){
  return string.replace(
    /\w*/g,
    function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    let sanitized = []
    let c = string.split("")
    for (let i = 0; i < c.length; i++) {
      const char = c[i];
      if(/^[a-zA-Z]+$/.test(char) || ["-", "'", " "].includes(char)){
        sanitized.push(char)
      }
    }
    return sanitized.join('')
  }

  static titleize(string){
    let formatted = []
    let exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let str = string.split(" ")
    for (let i = 0; i < str.length; i++) {
      let word = str[i];
      if(i === 0 || !exception.includes(word)){
        formatted.push(firstToUpper(word))
      }else{
        formatted.push(word)
      }
    }
    return formatted.join(" ")
  }
}
