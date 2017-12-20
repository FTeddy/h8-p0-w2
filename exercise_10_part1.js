//exercise part 1

var total= 0;

for(index= 1; index <=100; index++) {
  if(index % 2 !== 0) {
    total= total + index;
  }
  else {
    if(index % 2 === 0){
      total= total - index;
    }
  }
}

console.log('Total: '+ total);
