const random = require('../exercice/random.js');

setInterval(function() {
    let r = random.getIntInclusive(0, 255);
    let g = random.getIntInclusive(0, 255);
    let b = random.getIntInclusive(0, 255);
    document.body.style.backgroundColor = `rgb(${r}, ${r}, ${r})`;
}, 1000);
