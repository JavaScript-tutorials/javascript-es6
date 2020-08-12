function covert(type,value){
    switch(type){
      case "Int":
          return parseInt(value)
      case "Float":
          return parseFloat(value)
      case "String":
          return value.toString()
      default:
          return value
    }
}

function hash(password){
    var hash= '';
    var characters=`${password}`;
    var charactersLength = characters.length;

    for ( var i = 0; i < charactersLength; i++ ) {
       hash += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return hash
}

// console.log(typeof covert("String",3))

console.log(hash(12345))