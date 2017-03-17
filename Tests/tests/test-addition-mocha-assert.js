const assert = require('assert');
const addition = require('../src/addition');


describe('Tests calculette', () => {
    describe('Tests addition', () => {
        it('devraient retourner 3 si appelée avec 1 et 2', () => {
            assert.equal(addition(1, 2), 3);
            assert.equal(addition('1', '2'), 3);
        })
    });
});
