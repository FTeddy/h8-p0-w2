//METHOD 1
function balikString(input){
  // console.log(input.length)
  var output=''
  for(var index=input.length-1; index>=0; index--){
    output = output + input[index]
  }
  return output
}

console.log(balikString('Hello World!'));

//INDEX from .length is .length-1
//index = length - 1

//METHOD 2
function balikString(input){
  // console.log(input.length)
  var output_array=[]
  var result
  for(var index=input.length-1; index>=0; index--){
    output_array.push(input[index])
  }
  result=output_array.join('')
  return result
}

console.log(balikString('Cassowary'));
