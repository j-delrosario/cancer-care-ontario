process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');

let expect = chai.expect
let should = chai.should();

chai.use(chaiHttp);

describe('SDCForms', () => {
    var formID = 5005;
    var dp = 2;
    describe('/POST SDCForm', () => {
        it('it should not POST an SDCForm without an ID', (done) => {
            let form = {
                diagnosticProcedure: dp,
                sections: ["test", "test2"],
                questions: ["dummy", "dummy2"]
            }
          chai.request("http://localhost:3001/api")
              .post('/saveSDCForm')
              .send(form)
              .end((err, res) => {
                    (res).should.have.status(500);
                done();
              });

        });
        it('it should not POST an SDCForm without a diagnostic procedure', (done) => {
            let form = {
                id: formID,
                sections: ["test", "test2"],
                questions: ["dummy", "dummy2"]
            }
          chai.request("http://localhost:3001/api")
              .post('/saveSDCForm')
              .send(form)
              .end((err, res) => {
                    (res).should.have.status(500);
                done();
              });

        });
        it('it should POST a SDCForm', (done) => {
            let form = {
                id: formID,
                diagnosticProcedure: dp,
                sections: ["test", "test2"],
                questions: ["dummy", "dummy2"]
            }
          chai.request("http://localhost:3001/api")
              .post('/saveSDCForm')
              .send(form)
              .end((err, res) => {
                    (res).should.have.status(200);
                done();
              });

        });
    });
    describe('/GET SDCForm', () => {
        it('it should GET the specified SDCForm', (done) => {
            chai.request("http://localhost:3001/api")
                .get('/getSDCForm')
                .query({id: "5005"})
                .end((err, res) => {
                    (res).should.have.status(200);
                    expect((res)).to.be.an('object');
                    expect((res.body.sections)).to.be.an('array');
                    expect((res.body.questions)).to.be.an('array');
                    expect((res.body.id)).to.equal(formID);
                    expect((res.body.diagnosticProcedure)).to.equal(dp);
                done();
                });
        });
        it('it should GET the specified SDCForm', (done) => {
            chai.request("http://localhost:3001/api")
                .get('/getSDCForm')
                .query({id: "5005"})
                .end((err, res) => {
                    (res).should.have.status(200);
                    expect((res)).to.be.an('object');
                    expect((res.body.sections)).to.be.an('array');
                    expect((res.body.questions)).to.be.an('array');
                    expect((res.body.id)).to.equal(formID);
                    expect((res.body.diagnosticProcedure)).to.equal(dp);
                done();
                });
        });
    });

});