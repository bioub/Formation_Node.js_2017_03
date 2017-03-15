const random = function() {
    return Math.floor(Math.random() * 101);
};

for (let i=0; i<10; i++) {
    let alea = random();

    if (alea % 2 === 0) {
        console.log(`${alea} est pair`);
    }
}
