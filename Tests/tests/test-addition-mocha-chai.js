const expect = require('chai').expect;
const addition = require('../src/addition');


describe('Tests calculette', () => {
    describe('Tests addition', () => {
        it('devraient retourner 3 si appelée avec 1 et 2', () => {
            expect(addition(1, 2)).to.equals(3);
            expect(addition('1', '2')).to.equals(3);addition('1', '2')
        })
    });
});
