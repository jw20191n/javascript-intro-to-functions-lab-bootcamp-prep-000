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

function sayHiToGrandma(string){
  var lowerCase = string;
  var nohear = "I can't hear you!"
  var yeshear = "Yes, Indeed."
  var iloveyou = "I love you"
  if (lowerCase === string.toLowerCase){
    return nohear
  } else if(lowerCase === string.toUpperCase) {
    return yeshear
  } else if (lowerCase === iloveyou){
    return iloveyou + "too."
  }
}