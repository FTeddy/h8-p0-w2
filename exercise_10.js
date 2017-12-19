//exercise part 1

var total= 0;

for(index= 1; index <=100; index++) {
  if(index % 2 !== 0) {
    total= total + index;
    // console.log(total);
  }
  else {
    if(index % 2 === 0){
      total= total - index;
      // console.log(total);
    }
  }
}

console.log('Total: '+ total);


//exercise part 2

var pagar='';
for(index1=1; index1<=10 ; index1++){
  for(index2=0; index2<=10 ; index2++){
    pagar='#';
  }
  console.log(pagar);
}
var pagar='';


//exercise part 3

var bintang='';
for(index1=1; index1<=10 ;index1++){
  for(index2=0; index2<=index1 ; index2++){
    bintang='*';
  }
  console.log(bintang);
  var bintang='';
}
