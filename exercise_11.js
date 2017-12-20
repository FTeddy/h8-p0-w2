//Proxytia

var nama = 'Lalavys';
var peran = 'Ksatria';


var tahunLahir= 900;
var umur=2017-tahunLahir;
var playerHealth= tahunLahir * Math.random();
var monsterHealth= tahunLahir * Math.random();
var kodeMonster= Math.floor(Math.pow(100, Math.random()));


//Ksatria, Tabib, Penyihir, Warrior of Light

//penentuan peran
if(nama === '') {
  peran= 'kacung'
  console.log('Kamu adalah ' + peran + '!')
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

//player health display
console.log('Stamina kamu adalah: ' + playerHealth);
console.log('Stamina monster adalah ' + monsterHealth);

for(index=0; index<=tahunLahir; index++){
  if(index % umur === 0){
    console.log(peran + ' ' + nama + ' Menyerang Monster!')
    monsterHealth = monsterHealth-umur
  }
  else{
    if(index % kodeMonster === 0){
      console.log('Monster menyerang ' + peran + ' ' + nama + '!')
      playerHealth = playerHealth-kodeMonster
    }
    else{
      if(index % kodeMonster ===0 && index % umur === 0) {
        console.log('Health keduany bertambah')
        playerHealth= playerHealth+kodeMonster
        monsterHealth= monsterHealth+umur
      }
    }
  }
}

if(playerHealth > monsterHealth){
  console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!')
}
else {
  if(playerHealth < monsterHealth){
    console.log('Sayang sekali, ' + peran + ' ' + nama +' telah dikalahkan monster...')
  }
}
