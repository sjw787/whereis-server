let isUnique = function(str){
	const validChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
	't','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0', ' '];
	if( str.length > validChars.length){
		console.log("false case too long");
		return false;
	}

	let currChar;

  for(let i = 0; i < str.length; i++){

  	currChar = str.charAt(i);
		console.log(currChar);
      for(let j = i+1; j < (str.length); j++){
          if(currChar === str.charAt(j)){
              console.log('false');
              return false;
          }
      }
  }
  console.log('true');
  return true;
}

isUnique(process.argv[2]);
