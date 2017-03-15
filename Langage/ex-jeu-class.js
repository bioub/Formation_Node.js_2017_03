const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

class Jeu {
    constructor(options = {}) {
        this._min = options.min || 0;
        this._max = options.max || 100;
        this._entierAlea = getRandomIntInclusive(this._min, this._max);
        this._essais = [];
    }

    jouer() {
        if (this._essais.length) {
            console.log(`Vous avez déjà joué : ${this._essais.join(', ')}`);
        }

        rl.question('Saisir un entier entre 0 et 100 : ', (answer) => {
            const entierSaisi = Number.parseInt(answer);

            if (Number.isNaN(entierSaisi)) {
                console.log(`${answer} n'est pas un nombre`);
                return this.jouer();
            }

            this._essais.push(entierSaisi);

            if (entierSaisi < this._entierAlea) {
                console.log(`${answer} est trop petit`);
                return this.jouer();
            }

            if (entierSaisi > this._entierAlea) {
                console.log(`${answer} est trop grand`);
                return this.jouer();
            }

            console.log(`Gagné : ${answer} était le nombre !!!`);
            rl.close();
        });
    }
}

let jeu = new Jeu({
    min: 0,
    max: 100
});

jeu.jouer();