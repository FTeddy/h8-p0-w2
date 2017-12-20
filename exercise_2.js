var nama = '';
var peran = '';

//Ksatria, Tabib, Penyihir, Warrior of Light


if(nama === '') {
  console.log('Silahkan isi nama kamu!')
}
else {
  if(peran == 'Warrior of Light'){
    console.log('Welcome to Eorzea, ' + nama + ' the ' + peran + '!')
  }
  else {
    if(peran == 'Tabib') {
      console.log('Selamat datang di Dunia Proxytia, ' + nama +'.')
      console.log('Halo '+ peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.')
    }
    else {
      if(peran == 'Ksatria') {
        console.log('Selamat datang di Dunia Proxytia, ' + nama +'.')
        console.log('Halo '+ peran + ' ' + nama + ', kamu dapat menyerang dengan pedangmu!')
      }
      else {
        if(peran == 'Penyihir') {
          console.log('Selamat datang di Dunia Proxytia, ' + nama +'.')
          console.log('Halo '+ peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
        }
        else {
          console.log('Hello' + ' ' + nama +', pilih peranmu untuk memulai game!');
        }
      }
    }
  }
}
