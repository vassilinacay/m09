
function trainer(name, age, pokemon, friends) {
    this.name = name;
    this.age = age;
    this.pokemon = pokemon; 
    this.friends = friends;
    
    this.talk = function(myAttack){
        console.log(`\n>>> ${myAttack}! I choose you!`);
    }
}

function Pokemon(name, level, health) {
	// properties
	this.name = name;
	this.level = level;
	this.health = health;
	this.attack = level;

    // methods
	this.tackle = function(target) {
        console.log(`\n>>> ${target.name}'s health [${target.health}]`);
        
        while(target.health >= this.attack){
            console.log(`>>> ${this.name} tackles ${target.name} with ${this.attack} attacks!`);
            target.health -= this.attack;
            console.log(`>>> ${target.name}'s health [${target.health}]`);
            
        }
        console.log(`>>> ${this.name} tackles ${target.name} with ${this.attack} attacks!`);
        target.health -= this.attack;
        if (target.health < 0){
            target.health = 0;
            console.log(`>>> ${target.name}'s health [${target.health}]`);
        }
    }
    
	this.faint = function(target) {
		console.log(`>>> ${target.name} has fainted`);
	}
    
    this.condition = function(target) {
        if (this.health <= 0) {
            this.faint(target.name);
        }
	}
}

let myTrainer = new trainer('Ash', 18, ['Pikachu', 'Charizard', 'Bulbasaur'], ['Misty', 'Brock', 'May']);
let pikachu = new Pokemon('Pikachu', 57, 100);
let onix = new Pokemon('Onix', 37, 100);
let myPokemon = pikachu.name;

console.log(myTrainer);
myTrainer.talk(myPokemon);
pikachu.tackle(onix);
pikachu.faint(onix);
pikachu.condition(onix);