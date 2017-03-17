const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Tests functionnels', () => {
    describe('Tests de la page /contacts', () => {
        it('devraient retourner un status code 200', (done) => {
            chai.request('http://localhost:3000')
                .get('/contacts')
                .end((err, res) => {
                     expect(err).to.be.null;
                     expect(res).to.have.status(200);
                     done();
                });
        })
    });
});
