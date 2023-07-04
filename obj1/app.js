const myObjects = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
        // do stuff
    }
}

console.log(myObjects.property);
console.log(myObjects['obnoxious property']);

const playerOne = {
    name: 'tim',
    marker: 'X',
    score:15,
}

const playerTwo = {
    name: 'jenn',
    marker:'O',
    score: 5,
}

function keepScore() {
    if(playerOne.score >=  10) {
        gameOver(playerOne)
    } else if(playerTwo.score >= 10) {
        gameOver(playerTwo)
    }   
}
keepScore();

function gameOver(winningPlayer) {
    console.log('Congratulations');
    console.log(winningPlayer.name + ' is the winner.')
}

function printName(player) {
    console.log(player.name);
    console.log(player.marker)
}

printName(playerOne);
printName(playerTwo);

// Object Constructors

function Player(name, marker) {
    this.name = name
    this.marker = marker
}

const player = new Player('steve', 'X');
console.log(player.name)

// adding functions to object literals
function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
        console.log(name);
    }
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName() // logs 'steve'
player2.sayName() // log 'also steve'

Object.getPrototypeOf(player1) === Player.prototype;
Object.getPrototypeOf(player2) === Player.prototype;

Player.prototype.sayHello = function() {
    console.log('Hello I\'m a developer ');
}
player1.sayHello();
player2.sayHello();

player1.hasOwnProperty('value'); // false;
Object.prototype.hasOwnProperty('valueOf'); // true

function Person(name) {
    this.name = name
}

Person.prototype.sayName = function() {
    console.log(`Hllo, I'm ${this.name}`);
}

function Player(name, marker) {
    this.name = name
    this.marker = marker
}

Player.prototype.getMarker = function() {
    console.log(`My marker is ${this.marker}`)
}

// Object.getPrototypeOf(Player.prototype) should
// return the value of "Person.prototype" instead
// of "Object.prototype"

Object.setPrototypeOf(Player.prototype) // returns Object,prototype
// Now make `Player` objects inherit from `Person`;
Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype)
Object.getPrototypeOf(Player.prototype) // returnss Person.prototype

const player1 = new Player('steve', 'x');
const player2 = new Player('also steve', 'O');

player1.sayName() // Hello, I'm steve
player2.sayName() // Hello, I'm also steve

player1.getMarker() // my marker is 'x'
player2.getMarker() // my marker is '0'