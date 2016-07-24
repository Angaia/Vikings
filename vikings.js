//-----------VIKINGS EXERCISE--------------
//-----There are 2 battles here:
//----------- · Vikings vs vikings (practice function)
//----------- · Vikings vs Saxons (battle.fight)
//---------------------------------------------------------------------------------------

// First we create VIKINGS
// Constructor for 2 vikings with 4 parameters:
// Name, super-health, super-strength, warcry

var Viking = function (name, health, strength, warcry) {	
	this.name = name;
	this.health = health;
	this.strength = strength;	
	this.warcry = warcry;
};

var vi1 = new Viking ("Arjktur", 100, 40, "DIE SAXONS, DIE!!!!");
var vi2 = new Viking ("Roarjkt", 100, 30, "FEEL THE RAGE OF ODIN!!!");
var vi3 = new Viking ("Fliskityr", 100, 35, "AL TURROOOON!!!");
var vikings = [vi1, vi2, vi3];
var vikingsMaxIndex = vikings.length-1;
var vikingsRandomIndex = Math.floor(Math.random() * (vikingsMaxIndex + 1));
var vikingsThatDied = [];
var vikingsLengthOriginal = vikings.length;


//We create an arena were vikings practice fights 1vs1
//Once the life on one of them is 0 the battle ends
var Pit = function (vi1, vi2){
	this.fighter1 = vi1;
	this.fighter2 = vi2;
	this.fight = function () {
		console.log('\n------------------------------------------------\n/////// THE PRACTICE FOR VIKINGS STARTS //////\n------------------------------------------------')
		//this will print each viking's health per round:
		while (vi2.health > vi1.strength && vi1.health > vi2.strength) {
			vi2.health = vi2.health - vi1.strength;
			vi1.health = vi1.health - vi2.strength;
			console.log('\n------------------------------------------------\n/////// PRACTICE ROUND //////\n------------------------------------------------\n')
			console.log('Viking 1 receives ' +  vi2.strength + ' damage points. His health is now ' + vi1.health + ' points');
			console.log('Viking 2 receives ' +  vi1.strength + ' damage points. His health is now ' + vi2.health + ' points');
			
			//if viking 2 dies
			if (vi2.health <= vi1.strength ) {
			console.log (vi2.name  + ' has lost');
			     winner = vi1.name;
			     console.log(winner + ' IS THE WINNER');
			};

			//if viking 1 dies
			if (vi1.health <= vi2.strength ) {
			console.log (vi1.name + ' has lost');
			     winner = vi2.name;
			     console.log(winner + ' IS THE WINNER');
			};

		};
	console.log('\n------------------------------------------------\n/////// THE PRACTICE FOR VIKINGS ENDS //////\n------------------------------------------------\n')
	}
}

var practice = new Pit(vi1, vi2); 
practice.fight();

//--------------------------------------------------------------

// We define now the SAXONS parameters:
// ---- No name
// ---- strength and health are randomly assigned between a certain range
// ---- and lower than vikings:

var Saxon = function (name, health, strength) {
	this.name = "PoorSaxon";
	this.health = Math.floor((Math.random() * 80) + 10);
	this.strength = Math.floor((Math.random() * 15) + 10);
	};

var sax1 = new Saxon;
var sax2 = new Saxon;
var sax3 = new Saxon;
var sax4 = new Saxon;
var sax5 = new Saxon;
var sax6 = new Saxon;
var sax7 = new Saxon;
var saxons = [sax1, sax2, sax3, sax4, sax5, sax6, sax7]
var saxonsMaxIndex = saxons.length-1;
var saxonsRandomIndex = Math.floor(Math.random() * (saxonsMaxIndex + 1));
var saxonsThatDied = [];
var saxonsLengthOriginal = saxons.length;


// ---------------------- BATTLE VIKINGS VS SAXONS ---------------------------------------
// There is a turn limit of 7. The team with more people alive would win (So sometimes Saxons might win).
// Fighters are randomly assigned.
// They attack AT THE SAME TIME so we always see their attack and remaining life
// When one beats the other, that one passes to the next opponent with his remaining health points

var battle = new Pit(vikings, saxons);
battle.viking = vikings[vikingsRandomIndex];
battle.saxon = saxons[saxonsRandomIndex];

var turn = 1;

console.log('\n------------------------------------------------\n/////// THE REAL BATTLE VIKINGS VS SAXONS BEGGINS //////\n------------------------------------------------\n')
console.log('VIKINGS ENTER TO THE VILLAGE AND YELL THEIR WARCRIES');
console.log ( vi1.name + ' shouts ' + vi1.warcry);
console.log ( vi2.name + ' shouts ' + vi2.warcry);
console.log ( vi3.name + ' shouts ' + vi3.warcry);
console.log('--------------------------------\n--------------------------------');
console.log('The first two opponents are:');
console.log(battle.viking);

console.log(battle.viking);
console.log('VERSUS');
console.log(battle.saxon);
console.log('--------------------------------');

battle.fight = function () { 
	while (vikings.length !== 0 && saxons.length !== 0) {
		if (this.viking.health > 0 && this.saxon.health > 0)

		this.saxon.health = this.saxon.health - this.viking.strength;
		this.viking.health = this.viking.health - this.saxon.strength;
		console.log('--------------------------------');
		console.log('\n//////////////  TURN ' + (turn ++) + '  ////////////////');
		console.log(this.viking.name + ' causes ' + this.viking.strength + ' damage points');
		console.log(this.saxon.name + ' health is ' + this.saxon.health);
		console.log(this.saxon.name + ' causes ' + this.saxon.strength + ' damage points');
		console.log(this.viking.name + ' health is ' + this.viking.health);

		if (turn === 8) {
			return;
		}

		if (this.viking.health < this.saxon.strength) {
			console.log ('---- ' + this.viking.name + ' is dead ----');
			winner = this.saxon.name;
			vikingsThatDied.push(this.viking);
			vikings = vikings.slice(1, vikings.length);
			this.viking = vikings[0];
			console.log('//////////  ' + winner + ' IS STILL ALIVE and goes to the next opponent ////////');
		}

		if (this.saxon.health < this.viking.strength ) {
			console.log ('----- ' + this.saxon.name + ' is dead -----');
			winner = this.viking.name;
			saxonsThatDied.push(this.saxon);
			saxons = saxons.slice(1, saxons.length);
			this.saxon = saxons[0];
			console.log('//////////  ' + winner + ' IS STILL ALIVE and goes to the next opponent ////////');
		} 
	};
};

// COMPARATION OF DEATHS AND WHO WON
function compareDeaths () {
	var saxonsDead = (saxonsThatDied.length * 100) / saxonsLengthOriginal;
	var vikingsDead = (vikingsThatDied.length * 100) / vikingsLengthOriginal;

 	if (saxonsDead < vikingsDead) {
 		console.log('\n-------------------------------- saxons HAVE WON!! HOW COULD THAT HAPPEN??? THEY RUN AWAY WITH MAGIC TO PLAN THEIR REVENGE --------------------------------\n');
 	}
 	
 	if (vikingsDead < saxonsDead) {
 		console.log('\n------------ THE GREAT VIKINGS HAVE WON!!! LETS GET SOME BEER!!!! ------------\n');
 	}
 		console.log(saxonsDead + ' % of the saxons are dead and ' + vikingsDead + ' % of the vikings are still alive.');

}

battle.fight();
compareDeaths();

