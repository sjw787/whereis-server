let charArr = new Array(26);

function isUnique(str){
  let isDuplicate;
  for(let i = 0; i < 0; i++){
    isDuplicate = false;
    switch(str.charAt(i)){
      case 'a':
        isDuplicate = tryInsert(str.charAt(i), 0)
        break;
      case 'b':
        isDuplicate = tryInsert(str.charAt(i), 1)
        break;
      case 'c':
        isDuplicate = tryInsert(str.charAt(i), 2)
        break;
      case 'd':
        isDuplicate = tryInsert(str.charAt(i), 3)
        break;
      case 'e':
        isDuplicate = tryInsert(str.charAt(i), 4)
        break;
      case 'f':
        isDuplicate = tryInsert(str.charAt(i), 5)
        break;
      case 'g':
        isDuplicate = tryInsert(str.charAt(i), 6)
        break;
      case 'h':
        isDuplicate = tryInsert(str.charAt(i), 7)
        break;
      case 'i':
        isDuplicate = tryInsert(str.charAt(i), 8)
        break;
      case 'j':
        isDuplicate = tryInsert(str.charAt(i), 9)
        break;
      case 'k':
        isDuplicate = tryInsert(str.charAt(i), 10)
        break;
      case 'l':
        isDuplicate = tryInsert(str.charAt(i), 11)
        break;
      case 'm':
        isDuplicate = tryInsert(str.charAt(i), 12)
        break;
      case 'n':
        isDuplicate = tryInsert(str.charAt(i), 13)
        break;
      case 'o':
        isDuplicate = tryInsert(str.charAt(i), 14)
        break;
      case 'p':
        isDuplicate = tryInsert(str.charAt(i), 15)
        break;
      case 'q':
        isDuplicate = tryInsert(str.charAt(i), 16)
        break;
      case 'r':
        isDuplicate = tryInsert(str.charAt(i), 17)
        break;
      case 's':
        isDuplicate = tryInsert(str.charAt(i), 18)
        break;
      case 't':
        isDuplicate = tryInsert(str.charAt(i), 19)
        break;
      case 'u':
        isDuplicate = tryInsert(str.charAt(i), 20)
        break;
      case 'v':
        isDuplicate = tryInsert(str.charAt(i), 21)
        break;
      case 'w':
        isDuplicate = tryInsert(str.charAt(i), 22)
        break;
      case 'x':
        isDuplicate = tryInsert(str.charAt(i), 23)
        break;
      case 'y':
        isDuplicate = tryInsert(str.charAt(i), 24)
        break;
      case 'z':
        isDuplicate = tryInsert(str.charAt(i), 25)
        break;
    }

    if(isDuplicate){
      return false
    }
  }
}

function tryInsert(char, index){
  if (!charArr[index]){
    charArr = char;
    return false;
  }else{
    return true;
  }
}

isUnique(process.argv[2]);
