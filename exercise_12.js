//METHOD 1
function balikString(inputWord){
  // console.log(input.length)
  var output=''
  for(var index=inputWord.length-1; index>=0; index--){
    output = output + inputWord[index] //insert letters from input with reversed index no. as string
  }
  return output
}

console.log(balikString('Hello World!'));

//INDEX from .length is .length-1
//index = length - 1

//METHOD 2
function balikString(inputWord){
  // console.log(input.length)
  var output_array=[]
  var result
  for(var index=inputWord.length-1; index>=0; index--){
    output_array.push(inputWord[index]) //insert letters from input as array in reverse index
  }
  result=output_array.join('') //join array as string
  return result
}

console.log(balikString('Cassowary'));
