var sayHi = require('./submodule-sayHi/sayHi.js');

function copeHello () {                          // ---> new featureCope
    console.log('Hola hola, tiempo de juego!!'); // ---> new featureCope
}                                                // ---> new featureCope


function introducingTeams () {
    console.log('The latino league is gonna play : Always Unai, Legion FC, Kaflosan');
}

function saySomething () {
    console.log('I am saying something');
}

function playingMusic () {                          // Playing music feature
    console.log('Playing music');                   // Playing music feature
}                                                   // Playing music feature


function sayBye () {
    console.log('I am saying bye');
}

function main () {
    sayHi.sayHi();
    copeHello();                                // ---> new featureCope
    introducingTeams();
    saySomething();
    playingMusic();                                 // Playing music feature  
    sayBye();
}

main();
