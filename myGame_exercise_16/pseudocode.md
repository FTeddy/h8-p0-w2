```
//#############################################################
player vs monster in a arena
10 rounds
Enter your player Name
current version is automatic combat and resolution


//############ COMMON VARIABLES ###############################
set Class array
	'Saber','Archer','Lancer','Caster','Assasin','Rider','Beserker'
set variables
	round count,
	turn count


//############ PLAYER VARIABLES ################################
set player name 'Jones'
set variables :
	player class
	player level = 1
	player health
	player atk = 400
	player def = 100
function for calculating player health with player level as input scaling
	calculate player health as 1200 + (level/10) * 1000
	return player health

function player status reset
	set player atk as 400
	set player def as 100
	call classEffect for player
	call player health calculations with level input

function player status log
	display player current name and level\
	display player health
	display player atk
	display player def

function player basic atk
	set a damage variance variable as a random value between 0.9 to 1.2
	set damage as ( player atk * damage variance ) * 100 / monster def
	calculate monster health as monster health - damage
	display player damages monster for 'damage' and the monster remaining health

function player special skill
	set a damage variance variable as a random value between 0.9 to 1.2
	set damage as (player atk * damage variance ) * 100 / (monster def * 50/100)
	calculate monster health as monster health - damage
	display player cast smite on monster for 'damage' and the monster remaining health

function player actions
	set a rng variable between 0 to 100
	if rng is <= 70
		call player basic attack
	end if
	else
		if rng>70 and rng<=90
			call player special skill
		end if
		else
			display player misses the monster
		end else
	end else



//############ MONSTER VARIABLES ##############################
set monster name list array
	'Werewolf', 'Imp', 'Automata', 'Orc', 'Wyvern', 'Gorgon', 'Dragon', 'Raptor', 'Elemental Golem', 'Risen Dead'
set variables :
	monster class
	monster level = 1
	monster health
	monster atk = 400
	monster def = 100
function for calculating monster health with monster level as input scaling
	calculate monster health as 700 + (level/10) * 1000
	return monster health

function summon monster
	monster name is a random selection from monster name list array
	monster class is a random selection from class list
	call classEffect for monster
	call monster health calculations with level input

function boss summon
	determine basic monster stats by calling summon monster
	add 'Great to the front of monster name
	set monster level as 5
	set monster health as 1000 + monster health
	set monster atk as 100+ monster atk

function monster status reset
	set monster atk as 400
	set monster def as 100
	call classEffect for monster
	call monster health calculations with level input

function monster status log
	display monster current name and level\
	display monster health
	display monster atk
	display monster def

function monster basic atk
	set a damage variance variable as a random value between 0.9 to 1.2
	set damage as ( monster atk * damage variance ) * 100 / player def
	calculate player health as player health - damage
	display monster damages players for 'damage' and the player remaining health

function monster crit atk
	set a damage variance variable as a random value between 0.9 to 1.2
	set damage as ((150/100) * monster atk * damage variance ) * 100 / player def
	calculate player health as player health - damage
	display monster crits players for 'damage' and the player remaining health

function monster actions
	set a rng variable between 0 to 100
	if rng is <= 70
		call monster basic attack
	end if
	else
		if rng>75 and rng<=85
			call monster crit atk
		end if
		else
			display monster misses the player
		end else
	end else


//############ CLASS VARIABLES ################################
function for player class effect
	Switch with the input playerClass
		case 'Saber'	: calculate playerATK by 1.3, playerDEF by 1.0,break
		case 'Archer'	: calculate playerATK by 1.1, playerDEF by 1.2,break
		case 'Lancer'	: calculate playerATK by 1.0, playerDEF by 1.3,break
		case 'Caster'	: calculate playerATK by 0.9, playerDEF by 1.4,break
		case 'Assasin'	: calculate playerATK by 0.9, playerDEF by 1.4,break
		case 'Rider		: calculate playerATK by 1.1, playerDEF by 1.1,break
		case 'Berserker': calculate playerATK by 1.5, playerDEF by 0.8,break
		default is display error message for summoning error
	end switch

function for monster class effect
	Switch with the input monsterClass
		case 'Saber'	: calculate playerATK by 1.3, playerDEF by 1.0,break
		case 'Archer'	: calculate playerATK by 1.1, playerDEF by 1.2,break
		case 'Lancer'	: calculate playerATK by 1.0, playerDEF by 1.3,break
		case 'Caster'	: calculate playerATK by 0.9, playerDEF by 1.4,break
		case 'Assasin'	: calculate playerATK by 0.9, playerDEF by 1.4,break
		case 'Rider		: calculate playerATK by 1.1, playerDEF by 1.1,break
		case 'Berserker': calculate playerATK by 1.5, playerDEF by 0.8,break
		default is display error message for summoning error
	end switch


//############ SET PLAYER STATS ###############################
if player name is empty or not a string\
	display 'please enter your name
end if
else
	set player class as a random assignment from class name array
	call class effect to determine player's base stats
	display player is summonned into arena battle
	call status log to display player stats
	######### ROUND 1 to 9 ##############################
	loop round count 1 to 9 with incremet +1
		if arena win condition is false, break loop
		if round count is 2 then
			monster level is increased by 1
		Loop battle turn count 1-100 with increment +1
			if turn count is 1
				display round count
				reset player stats
				reset monster stats
				summon monster stat and attributes
				display player and monster names and level
				display player and mosnter health
			call player action
			if monster HP<=0
				display player won the battle
				player level increased by1, break loop
			call monster action
			if player hp<=0
				display player lost the battle
				arena win condition is false, break loop		
		end turn count loop
		monster level is increased by 1
		if round count is 9 and arena win condition is not false
			arena win condition is true
	end round count loop
	########## ROUND 10 ###############################
	if arena win win condition is false
		the end, player has died
	else
		display player has entered finals
		display	round 10 - boss battle
		loop turn count 1 - 99 with increment by 1
			if turn count is 1
				reset player stats
				reset monster stats
				summon boss with altered monster stats
				display player and monster names and level
				display player and mosnter health
			call player action
			if boss HP<=0
				display player won the battle
				display player won the game, break loop
			call monster action
			if player hp<=0
				display player lost the battle
				display the end., break loop
			display current player/monster HP
		end turn count loop
		if boss battle win condition is false
			display player has died
		else
			display player has won the game
	end else
end else
```
