const random = require('./random.js');

const randomBackground = function() {
    let r = random.getIntInclusive(0, 255);
    let g = random.getIntInclusive(0, 255);
    let b = random.getIntInclusive(0, 255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

setInterval(randomBackground, 1000);
randomBackground();
