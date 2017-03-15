const Jeu = require('./jeu');

// Dans le fichier jeu
// sortir la fonction aleatoire dans un fichier random.js


let jeu = new Jeu({
    min: 0,
    max: 100
});

jeu.jouer();