//exercise part 1
var nama= 'Anakin';
var angka_pembilang=9;
var angka_penyebut=3;
function hasil_bagi(angka_penyebut, angka_pembilang){
  return angka_pembilang / angka_penyebut;
}
console.log('Halo ' + nama + ', '+ angka_pembilang +' dibagi '+ angka_penyebut +' adalah sama dengan '+ hasil_bagi(angka_penyebut, angka_pembilang));

//exercise part 2
var alas;
var tinggi;
function luas_segitiga(alas, tinggi){
  return (alas * tinggi)/2
}
console.log('Luas segitiga: '+luas_segitiga(4,6));

//exercise part 3
var tahun=1988;
if(tahun % 4 === 0){
  if(tahun % 100 !== 0){
    console.log(tahun+' adalah tahun kabisat')
  }
  else {
    if(tahun % 400 === 0){
      console.log(tahun+' adalah tahun kabisat')
    }
    else {
      console.log(tahun+' adalah bukan tahun kabisat')
    }
  }
}
else {
  console.log(tahun+' adalah bukan tahun kabisat')
}
