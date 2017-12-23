/*
player vs monster in a arena
10 rounds
Enter your player Name
current version is automatic combat and resolution
*/

// array, function, loops, conditional, Pseudocode, no errors


//common variables pools
var Class=['Saber','Archer','Lancer','Caster','Assasin','Rider','Beserker'];
var roundCount;
var turnCount;

// #############################################################################
//player variables
var playerName= 'Jones';
var playerLevel= 1;
var playerHealth;
var playerATK= 400;
var playerDEF= 100;
var playerClass;
function playerHealthCalc(InputLevelHere){
  playerHealth= 1200 +((InputLevelHere/10)*1000);
  return playerHealth;
}
function playerStatuslog(){
  console.log(playerName+ ' '+ playerClass+' LV: '+playerLevel);
  console.log('Health: '+playerHealthCalc(playerLevel));
  console.log('ATK: '+playerATK);
  console.log('DEF: '+playerDEF);
}
function playerStatusReset(){
  playerATK=400;
  playerDEF=100;
  classEffectPlayer();
  playerHealthCalc(playerLevel);
}
function playerBasicAttack(){
  var damageVariance= (Math.floor(Math.random()*(120-90)) + 90)/100;
  var damage = Math.floor(Math.floor(playerATK * damageVariance)*100/monsterDEF);
  monsterHealth = monsterHealth - damage;
  console.log(playerName +' attack hits '+monsterName+' for '+damage+'. Current '+monsterName+' health: '+monsterHealth);
}
function playerSpecialSkill(){
  var damageVariance= (Math.floor(Math.random()*(120-90)) + 90)/100;
  var damage = Math.floor(Math.floor(playerATK * damageVariance)*100/(monsterDEF*50/100));
  monsterHealth = monsterHealth - damage;
  console.log(playerName +' Cast Smite hitting '+monsterName+' for '+damage+'. Current '+monsterName+' health: '+monsterHealth);
}
function playerActions(){
  var rng = Math.floor(Math.random()*100);
  if(rng<=70){
    playerBasicAttack();
  }
  else {
    if(rng>70 && rng<=90){
    playerSpecialSkill();
    }
    else {
      console.log(playerName +' attack misses '+monsterName);
    }
  }
}
//##############################################################################
//monster variables
var monsterNameList=['Werewolf','Imp','Automata','Orc','Wyvern','Gorgon','Dragon','Raptor','Elemental Golem','Risen Dead'];
var monsterClass;
var monsterLevel = 1;
var monsterHealth;
var monsterATK = 400;
var monsterDEF = 100;
function monsterHealthCalc(InputLevelHere){
  monsterHealth= 700 +((InputLevelHere/10)*1000);
  return monsterHealth;
}
//monster setup
function monsterSummon(){
  monsterName =  monsterNameList[Math.floor(Math.random()*monsterNameList.length)];
  monsterClass = Class[Math.floor(Math.random()*Class.length)];
  classEffectMonster();
  monsterHealthCalc(monsterLevel);
  // monsterStatuslog();
}
function bossSummon(){
  monsterSummon();
  monsterName='Great '+ monsterName;
  monsterLevel=5;
  monsterHealth= 1000+monsterHealth;
  monsterATK=monsterATK+100;
}
function monsterStatusReset(){
  monsterATK=400;
  monsterDEF=100;
  classEffectMonster();
  monsterHealthCalc(monsterLevel);
}
function monsterStatuslog(){
  console.log(monsterName+ ' '+ monsterClass+ ' LV: '+monsterLevel);
  console.log('Health: '+monsterHealthCalc(monsterLevel)+' DEBUG');
  console.log('ATK: '+monsterATK+' DEBUG');
  console.log('DEF: '+monsterDEF+' DEBUG');
}
function monsterBasicAttack(){
  var damageVariance= (Math.floor(Math.random()*(120-90)) + 90)/100;
  var damage = Math.floor(Math.floor(monsterATK * damageVariance)*100/playerDEF);
  playerHealth = playerHealth - damage;
  console.log(monsterName +' attack hits '+playerName+' for '+damage+'. Current '+playerName+' health: '+playerHealth);
}
function monsterCritAttack(){
  var damageVariance= (Math.floor(Math.random()*(120-90)) + 90)/100;
  var damage = Math.floor((150/100)*Math.floor(monsterATK * damageVariance)*100/playerDEF);
  playerHealth = playerHealth - damage;
  console.log(monsterName +' Critical hits '+playerName+' for '+damage+'. Current '+playerName+' health: '+playerHealth);
}
function monsterActions(){
  var rng = Math.floor(Math.random()*100);
  if(rng<=70){
    monsterBasicAttack();
  }
  else {
    if(rng>75 && rng<=85){
    monsterCritAttack();
    }
    else {
      console.log(monsterName +' attack misses '+playerName);
    }
  }
}
//##############################################################################
// Class variables
function classEffectPlayer(){
    switch(playerClass){
      case 'Saber':   playerATK= Math.floor(  1.3 * playerATK); playerDEF= Math.floor(  1.0 * playerDEF); break;
      case 'Archer':  playerATK= Math.floor(  1.1 * playerATK); playerDEF= Math.floor(  1.2 * playerDEF); break;
      case 'Lancer':  playerATK= Math.floor(  1.0 * playerATK); playerDEF= Math.floor(  1.3 * playerDEF); break;
      case 'Caster':  playerATK= Math.floor(  0.9 * playerATK); playerDEF= Math.floor(  1.4 * playerDEF); break;
      case 'Assasin': playerATK= Math.floor(  0.9 * playerATK); playerDEF= Math.floor(  1.4 * playerDEF); break;
      case 'Rider':   playerATK= Math.floor(  1.1 * playerATK); playerDEF= Math.floor(  1.1 * playerDEF); break;
      case 'Beserker':playerATK= Math.floor(  1.5 * playerATK); playerDEF= Math.floor(  0.8 * playerDEF); break;
      default: console.log('Summoning Ritual Error. Class is unknown')
    }
}
function classEffectMonster(){
    switch(monsterClass){
      case 'Saber':   monsterATK= Math.floor(  1.3 * monsterATK); monsterDEF= Math.floor(  1.0 * monsterDEF); break;
      case 'Archer':  monsterATK= Math.floor(  1.1 * monsterATK); monsterDEF= Math.floor(  1.2 * monsterDEF); break;
      case 'Lancer':  monsterATK= Math.floor(  1.0 * monsterATK); monsterDEF= Math.floor(  1.3 * monsterDEF); break;
      case 'Caster':  monsterATK= Math.floor(  0.9 * monsterATK); monsterDEF= Math.floor(  1.4 * monsterDEF); break;
      case 'Assasin': monsterATK= Math.floor(  0.9 * monsterATK); monsterDEF= Math.floor(  1.4 * monsterDEF); break;
      case 'Rider':   monsterATK= Math.floor(  1.1 * monsterATK); monsterDEF= Math.floor(  1.1 * monsterDEF); break;
      case 'Beserker':monsterATK= Math.floor(  1.5 * monsterATK); monsterDEF= Math.floor(  0.8 * monsterDEF); break;
      default: console.log('Monster has escaped captivity. Class is unknown')
    }
}
//##############################################################################
// Set the player
if(playerName === '' || typeof playerName !== 'string'){
  console.log('Please enter your Name');
}
else { // Set playerClass
  playerClass = Class[Math.floor(Math.random()*Class.length)];
  classEffectPlayer();
  console.log(playerName + ', you have been summoned as '+ playerClass + ' To fight in the Eternal Arena!');
  playerStatuslog();

  //############################################################################
  //round 1 to 9 looped
  for(var roundCount=1; roundCount<=9; roundCount++){
    if(arenaWinCondition===false){
      break;
    }
    if(roundCount===2){
      monsterLevel=monsterLevel+1;
    }
    for(var turnCount=1; turnCount<=100; turnCount++){
      if(turnCount===1){
        console.log('Round '+roundCount);
        playerStatusReset();
        monsterStatusReset();
        monsterSummon();
        console.log(playerName+' '+ playerClass+ ' LV '+ playerLevel+ ' VS '+monsterName+' '+monsterClass+' LV '+monsterLevel);
        console.log('HP: '+playerHealth+ '         HP: '+monsterHealth);
        // playerStatuslog();
        // monsterStatuslog();
      }
      playerActions();
      if (monsterHealth <= 0){
        console.log(playerName+' has defeated '+ monsterName+'!');
        playerLevel = playerLevel + 1;
        monsterLevel=monsterLevel+1;
        break;
      }
      monsterActions();
      if (playerHealth <= 0){
        console.log(playerName + ' has been defeated!');
        var arenaWinCondition = false;
        break;
      }

      // playerStatuslog();
      // monsterStatuslog();
      }
    }//turncount end

    if(roundCount===9 && arenaWinCondition!==false){
      var arenaWinCondition= true;
  }//round count end

  // BOSS BATTLE ##################################################################
  if (arenaWinCondition === false){
    console.log('The End...');
  }
  else {//round 10 boss
    console.log(playerName+' has entered the final battle!');
    console.log('Final Round');
    for(var turnCount=1; turnCount<=99; turnCount++){
      if(turnCount===1){
        playerStatusReset();
        monsterStatusReset();
        bossSummon();
        console.log(playerName+' '+ playerClass+ ' LV '+ playerLevel+ ' VS '+monsterName+' '+monsterClass+' LV '+monsterLevel);
        console.log('HP: '+playerHealth+ '         HP: '+monsterHealth);
        // playerStatuslog();
        // monsterStatuslog();
      }//end if
      playerActions();
      if (monsterHealth <= 0){
        console.log(playerName+' has defeated '+ monsterName+'!');
        console.log('Congratulations, '+playerClass+' '+playerName+'! You are victorius!');
        break;
      }
      monsterActions();
      if (playerHealth <= 0){
        console.log(playerName + ' has been defeated!');
        console.log('The End...');
        break;
      }
    }//end for turn loop
  }

}
