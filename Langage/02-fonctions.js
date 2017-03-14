const addition = function(a, b) {
    return a + b;
};

console.log(addition(1, 2)); // 3
console.log(addition('1', 2)); // '12'
console.log(addition(1, 2, 3)); // 3
console.log(addition(1)); // NaN

/**
 * Additionne 2 nombres
 * @param {number} a Le premier nombre
 * @param {number} b Le 2e nombre
 * @returns La somme
 */
const additionNb = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('a et b doivent etre des nombres');
    }

    return a + b;
};

console.log(additionNb(1, 2));
try {
    console.log(additionNb('1', 2));
}
catch(e) {
    console.log(e.message);
}

for (var i=0; i<3; i++) {
    setTimeout(function timeoutCb() {
        console.log(i);
    }, 1000);
}

// i === 3

var closure = function(saved) {
    // Portée de closure (sauvegardée au moment du passage
    // dans la fonction externe)
    var interne = function() {
        console.log(saved);
    };

    return interne;
};

var logHello = closure('Hello');
console.log(typeof logHello); // function (interne)
logHello(); // 'Hello'

for (var i=0; i<3; i++) {
    setTimeout(closure(i), 1000);
}