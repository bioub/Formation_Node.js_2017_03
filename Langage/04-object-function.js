global.prenom = 'Eric';

const contact = {
    prenom: 'Romain'
};

const hello = function(prenom1, prenom2) {
    console.log(`Bonjour ${prenom1}, ${prenom2} je m'appelle ${this.prenom}`);
};

hello('Jean', 'Thierry');
hello.call(contact, 'Jean', 'Thierry');
hello.apply(contact, ['Jean', 'Thierry']);

const helloContact = hello.bind(contact); // ES5
helloContact('Jean', 'Thierry');