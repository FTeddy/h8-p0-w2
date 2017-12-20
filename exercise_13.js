function inputLength(parameter){
  var result=parameter.length
  return result
}
function dataHandling(parameter){
    // console.log('count '+count); //debug counter
    console.log('Nomor ID:      '+parameter[count][0])
    console.log('Nama Lengkap:  '+parameter[count][1])
    console.log('TTL:           '+parameter[count][2]+ ' ' +parameter[count][3])
    console.log('Hobby:         '+parameter[count][4])
}

var input=[
            ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
            ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
            ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
            ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
          ];

for(var count = 0; count <= inputLength(input) - 1; count++){
  dataHandling(input);
}

// junk codes for reference below
// repeat 4 times for 6 datas
// function dataHandling(parameter){
//   for(var count=0; count<=parameter.length-1; count++){
    // console.log('count '+count);
    // console.log('Nomor ID:   '+parameter[count][0])
    // console.log('Nama Lengkap:   '+parameter[count][1])
    // console.log('TTL:   '+parameter[count][2]+ ' ' +parameter[count][3])
    // console.log('Hobby:   '+parameter[count][4])
//   }
//   return
// }

// function dataHandling(parameter){
//   for(var count=0; count<=parameter.length-1; count++){
//     var index=('count '+count);
//     var nomorID=('Nomor ID:   '+parameter[count][0])
//     var namaLengkap=('Nama Lengkap:   '+parameter[count][1])
//     var ttl=('TTL:   '+parameter[count][2]+ ' ' +parameter[count][3])
//     var hobi=('Hobby:   '+parameter[count][4])
//   }
//   return console.log(index+nomorID+namaLengkap+ttl+hobi)
// }
