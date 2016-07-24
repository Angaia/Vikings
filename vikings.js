// constructor para 2 vikingos con 3 parametros:
// Name, health, strength

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


//hay un arena que es donde se meten de leches
//para que funcione la arena necesita 2 vikingos
//cuando vida = 0 se acaba


var Pit = function (vi1, vi2){
	this.fighter1 = vi1;
	this.fighter2 = vi2;
	this.fight = function () {
		while (vi2.health > vi1.strength && vi1.health > vi2.strength) {
			vi2.health = vi2.health - vi1.strength;
			vi1.health = vi1.health - vi2.strength;
			console.log(vi1.health);
			console.log(vi2.health);
			//esto imprime la salud por cada vuelta de cada uno

			if (vi2.health <= vi1.strength ) {
			console.log (vi2.name  + ' has lost');
			     winner = vi1.name;
			     console.log(winner + ' IS THE WINNER');
			};


			if (vi1.health <= vi2.strength ) {
			console.log (vi1.name + ' has lost');
			     winner = vi2.name;
			     console.log(winner + ' IS THE WINNER');
			};

		};
	}
}
var practice = new Pit(vi1, vi2); 
// practice.fight();

// SAXONS
// No name
// strength and health are randomly assigned
// and lower than vikings

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
var saxonsStillAlive = saxons.length - saxonsThatDied;
var saxonsLengthOriginal = saxons.length;


// BATALLA VS SAXONS

var battle = new Pit(vikings, saxons);
battle.fighter1 = vikings[vikingsRandomIndex];
battle.fighter2 = saxons[saxonsRandomIndex];

var turn = 1;

console.log('VIKINGS ENTER TO THE VILLAGE AND YELL THEIR WARCRIES');
console.log ( vi1.name + ' shouts ' + vi1.warcry);
console.log ( vi2.name + ' shouts ' + vi2.warcry);
console.log ( vi3.name + ' shouts ' + vi3.warcry);
console.log('--------------------------------\n--------------------------------');
console.log('The first two opponents are:');
console.log(battle.fighter1);
console.log('VERSUS');
console.log(battle.fighter2);
console.log('--------------------------------');

battle.fight = function () { 
	while (vikings.length !== 0 && saxons.length !== 0) {
		if (this.fighter1.health > 0 && this.fighter2.health > 0)

		this.fighter2.health = this.fighter2.health - this.fighter1.strength;
		this.fighter1.health = this.fighter1.health - this.fighter2.strength;
		console.log('--------------------------------');
		console.log('//////////////  TURN ' + (turn ++) + '  ////////////////');
		console.log(this.fighter1.name + ' causes ' + this.fighter1.strength + ' damage points');
		console.log(this.fighter2.name + ' health is ' + this.fighter2.health);
		console.log(this.fighter2.name + ' causes ' + this.fighter2.strength + ' damage points');
		console.log(this.fighter1.name + ' health is ' + this.fighter1.health);

		if (turn === 8) {
			return;
		}

		if (this.fighter1.health < this.fighter2.strength) {
			console.log ('---- ' + this.fighter1.name + ' is dead ----');
			winner = this.fighter2.name;
			vikingsThatDied.push(this.fighter1);
			vikings = vikings.slice(1, vikings.length);
			this.fighter1 = vikings[0];
			console.log('//////////  ' + winner + ' IS STILL ALIVE and goes to the next opponent ////////');
		}

		if (this.fighter2.health < this.fighter1.strength ) {
			console.log ('----- ' + this.fighter2.name + ' is dead -----');
			winner = this.fighter1.name;
			saxonsThatDied.push(this.fighter2);
			saxons = saxons.slice(1, saxons.length);
			this.fighter2 = saxons[0];
			console.log('//////////  ' + winner + ' IS STILL ALIVE and goes to the next opponent ////////');
		} 
	};
};

// COMPARE DEADS AND WHO WON

function compareDeaths () {
	var saxonsDead = (saxonsThatDied.length * 100) / saxonsLengthOriginal;
	var vikingsDead = (vikingsThatDied.length * 100) / vikingsLengthOriginal;

 	if (saxonsDead < vikingsDead) {
 		console.log('saxons HAVE WON!! HOW COULD THAT HAPPEN???');
 	}
 	
 	if (vikingsDead < saxonsDead) {
 		console.log('THE GREAT VIKINGS HAVE WON!!! LETS GET SOME BEER!!!!');
 	}
 		console.log(saxonsDead + ' % of the saxons are dead and ' + vikingsDead + ' % of the vikings are still alive. THE GREAT VIKINGS HAVE WON!!! LETS GET SOME BEER!!!!');

}

battle.fight();
compareDeaths();

