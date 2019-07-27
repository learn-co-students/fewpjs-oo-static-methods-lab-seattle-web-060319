class Formatter {
  static capitalize(string){
    let firstLetter = string.charAt(0).toUpperCase();
    firstLetter
    let stroong = string.slice(1)
    let newString = firstLetter + stroong
    return newString;
  }

  static sanitize(string){
    let arr = string.split("")
    let ansArr = [];
    arr.forEach(function(element){
      if (/^[a-zA-Z0-9 '-]+$/.test(element) ){ // or [" ", "'", "-"]
        ansArr.push(element)
      }
    })
    return ansArr.join("")
  }

  static titleize(string){
     let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
    let arr = string.split(" ");
    let result = [];
    for ( let n = 0; n < arr.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arr[ n ] ) )
      } else {
        if ( exceptions.includes( arr[ n ] ) ) {
          result.push( arr[ n ] )
        } else {
          result.push( this.capitalize( arr[ n ] ) )
        }
      }

    }
    return result.join( " " );

  }

}
