// Code your solution here!


function printString(string){
  if(string.length === 1 ){
    console.log(string.substring(0, 1))
    return
  }
  console.log(string.substring(0, 1))
  let newString = string.substring(1, string.length)
  return printString(newString)
}

function reverseString(string){
  if(string.length === 0){
    return ""
  }
  let newString = string.substring(0, string.length - 1)
  return string[string.length - 1] + reverseString(newString)
}

function isPalindrome(string){
  if(string.length === 0 || string.length === 1){
    return true
  }
  if(string[0] === string[string.length - 1]){
    let newString = string.substring(1, string.length -1)
    return isPalindrome(newString)
  }
  return false
}

function addUpTo(array, index){
  if(index === 0){
    return array[0]
  }
  let newIndex = index - 1
  return array[index] + addUpTo(array, newIndex )
}

function maxOf(array){
  if(array.length === 1){
    return array[0]
  }
  if(array[0] >= array[1]){
    array.splice(1, 1)
  } else if(array[0] <= array[1]){
    array.splice(0, 1)
  }
  return maxOf(array)
}

function includesNumber(array, number){
  if(array.length === 0){
  return false
  } 
  if(array[0] === number){
    return true
  }
  array.splice(0, 1)
  return includesNumber(array, number)
}
