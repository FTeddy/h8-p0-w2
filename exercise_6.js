console.log('LOOPING PERTAMA');
for(var count= 1; count <= 100; count++) {
        if(count % 2 !== 0){
        console.log(count+' adalah GANJIL');
        }
        else {
          console.log(count+' adalah GENAP');
        }
}

// count=(count % 3)+2
console.log('LOOPING KEDUA');
for(var count= 1; count <= 100; count=count+2) {
        if(count % 3 === 0){
        console.log(count + ' KELIPATAN 3')
        }
}


console.log('LOOPING KETIGA');
for(var count= 1; count <= 100; count=count+5) {
        if(count % 6 === 0){
        console.log(count+' KELIPATAN 6');
        }
}


console.log('LOOPING KEEMPAT');
for(var count= 1; count <= 100; count=count+9) {
        if(count % 10 === 0){
        console.log(count+' KELIPATAN 10');
        }
}
