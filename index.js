class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    let array = string.split(" ");
    let new_array = [];
    new_array.push(this.capitalize(array.shift()));
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    array.forEach(word => {
      if(words.includes(word)) {
        new_array.push(word);
      }else {
        new_array.push(this.capitalize(word));
      }
    })
    return new_array.join(' ');
  }


}