var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(parameter){
  //add Elsharawy to name, Provinsi to location, gender 'pria', remove membaca; add SMA Internasional Metro
  //parameter.splice(start, del, add, add2)
  parameter.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung')
  parameter.splice(4, 1, 'Pria', 'SMA Internasional Metro')
  console.log(parameter)


  var date = parameter[3]
  var date_split = date.split('/')
  // console.log(date_split)
  // console.log(date_split_number)
  var month = date_split[1]
  // console.log(month)
  // console.log(typeof month)
    switch(month) {
      case '01':   {console.log('Januari'); break;}
      case '02':   {console.log('Febuari'); break;}
      case '03':   {console.log('Maret'); break;}
      case '04':   {console.log('April'); break;}
      case '05':   {console.log('Mei'); break;}
      case '06':   {console.log('Juni'); break;}
      case '07':   {console.log('Juli'); break;}
      case '08':   {console.log('Agustus'); break;}
      case '09':   {console.log('September'); break;}
      case '10':   {console.log('Oktober'); break;}
      case '11':   {console.log('November'); break;}
      case '12':   {console.log('Desember'); break;}
      default:   {console.log('Data Bulan error')}
    }


  var date_split_number = date_split.map(Number) //BEST I CAN FIND
  var date_sorted= date_split_number.sort(function(val1, val2){return val1 < val2})
  date_sorted.splice(2,1, '0'+date_sorted[2])
  console.log(date_sorted)


  var date_joined = date_split.join('-')
  console.log(date_joined)


  var nama_short=parameter[1].slice(0,14)
  console.log(nama_short)
}

dataHandling2(input);
