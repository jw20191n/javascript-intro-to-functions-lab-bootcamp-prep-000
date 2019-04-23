function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  string = string.toUpperCase()
  console.log(`${string}`)
}

function logWhisper(string){
  string = string.toLowerCase()
  console.log(`${string}`)
}

sayHiToGrandma(string){
  var lowerCase = string;
  if (lowerCase === string.lowerCase){
    return 
  }
}