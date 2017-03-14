var cpt = 0;

const contactFromObjectLiteral = {
    prenom: 'Romain',
    nom: 'Bohdanowicz',
    'date-de-naissance': '01/10/1985',
    adresse: {
        cp: '',
        ville: ''
    }
};

contactFromObjectLiteral.ville = 'Paris';

for (let prop in contactFromObjectLiteral) {
    console.log(prop);
    console.log(typeof prop);
    console.log(contactFromObjectLiteral[prop]);
}

const ContactAvecClosure = function(prenom, nom) {
    this.prenom = prenom;
    this.getNom = function() {
        return nom;
    };
};

const contact1 = new ContactAvecClosure('Romain', 'Bohdanowicz');
console.log(typeof contact1); // 'object'
console.log(contact1.prenom); // 'Romain'
console.log(contact1.getNom()); // 'Romain'

const contact2 = new ContactAvecClosure('Eric', 'Martin');
console.log(contact1.getNom === contact2.getNom); // false

const ContactAvecPrototype = function(prenom) {
    this.prenom = prenom;
};

ContactAvecPrototype.getClass = function() {
    return `ContactAvecPrototype`;
};

ContactAvecPrototype.prototype.hello = function() {
    return `Bonjour je m'appelle ${this.prenom}`;
};

const contact3 = new ContactAvecPrototype('Romain');
const contact4 = new ContactAvecPrototype('Eric');
console.log(contact3.prenom); // prenom est dans l'objet
console.log(contact3.hello()); // hello est dans le proto de ContactAvecPrototype
console.log(contact3.hasOwnProperty('prenom')); // hasOwnProperty est dans le proto de Object
console.log(contact3.hasOwnProperty('hello'));
console.log(contact3.hello === contact4.hello); // true

class Contact {
    constructor(prenom) {
        this.prenom = prenom;
    }
    static getClass() {
        return `ContactAvecPrototype`;
    }
    hello() {
        return `Bonjour je m'appelle ${this.prenom}`;
    }
}

const contact5 = new Contact('Romain');
console.log(contact5.prenom);
console.log(contact5.hello());
console.log(Contact.getClass());
console.log(typeof Contact); // function
console.log(typeof Contact.prototype.hello); // function
