function isUnique(str){
  let characters = {};
  const MAX_ASCII_CHARS = 26;

  if(str.length > MAX_ASCII_CHARS){
    return false;
  }

  for(let i = 0; i < str.length; i++){
    let currentChar = str.charAt(i);
    if(!characters[currentChar]){
      characters[currentChar] = 1;
    }else{
      return false;
    }
  }
  return true;
}

console.log(isUnique(process.argv[2]));
