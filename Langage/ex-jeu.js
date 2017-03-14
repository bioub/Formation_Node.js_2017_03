const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var entierAlea = getRandomIntInclusive(0, 100);
var essais = [];

const jouer = function() {

    if (essais.length) {
        console.log(`Vous avez déjà joué : ${essais.join(', ')}`);
    }

    rl.question('Saisir un entier entre 0 et 100 : ', function answerCb(answer) {
        
        const entierSaisi = Number.parseInt(answer);

        if (Number.isNaN(entierSaisi)) {
            console.log(`${answer} n'est pas un nombre`);
            return jouer();
        }

        essais.push(entierSaisi);
        
        if (entierSaisi < entierAlea) {
            console.log(`${answer} est trop petit`);
            return jouer();
        }

        if (entierSaisi > entierAlea) {
            console.log(`${answer} est trop grand`);
            return jouer();
        }

        console.log(`Gagné : ${answer} était le nombre !!!`);
        rl.close();
    });
};

jouer();
