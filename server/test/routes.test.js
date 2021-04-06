process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');

let expect = chai.expect
let should = chai.should();

chai.use(chaiHttp);

describe('SDCForms', () => {
    var exampleID = "asdfasdfasd";
    var dp = {"_id" : Buffer.from(exampleID+"4", 'utf8').toString('hex'), name: "dp name"}
    var pa = {"_id" : Buffer.from(exampleID+"3", 'utf8').toString('hex'), name: "patient name"}
    var ff = {"_id" : Buffer.from(exampleID+"2", 'utf8').toString('hex'), name: "ff name",}
    describe('/POST SDCForm', () => {
        it('it should not POST an SDCForm without a diagnostic procedure', (done) => {
            let form = {
                patient: pa,
                formFiller: ff,
                sections: ["test", "test2"],
                questions: ["dummy", "dummy2"]
            }
          chai.request("http://localhost:3001/api/SDCForm")
              .post('/')
              .send(form)
              .end((err, res) => {
                    (res).should.have.status(500);
                done();
              });

        });
        /*it('it should POST a SDCForm', (done) => {
            let form = {"file":{"path":'./testSDCForm.pdf'}};
            //form.append("file", './testSDCForm.pdf');
          chai.request("http://localhost:3001/api/SDCForm")
              .post('/')
              .send(form)
              //.attach('testSDCForm', './testSDCForm.pdf', 'testSDCForm.pdf')
              .end((err, res) => {
                    (res).should.have.status(200);
                    let id = res1.body._id;
                    chai.request("http://localhost:3001/api/SDCForm")
                    .delete('/'+id)
                    .end((err2, res2) => {
                        (res2).should.have.status(200);
                    });
                    done();
              });

        });*/
    });
    describe('/GET SDCForm', () => {
        it('it should GET the specified SDCForm', (done) => {
            chai.request("http://localhost:3001/api/SDCForm")
                .get('/')
                .end((err, res1) => {
                    (res1).should.have.status(200);
                    let dpid = res1.body[0].diagnosticProcedure.id;
                    let form = res1.body[0]
                    chai.request("http://localhost:3001/api/SDCForm")
                    .get('/'+dpid)
                    .end((err, res) => {
                        (res).should.have.status(200);
                        expect((res)).to.be.an('object');
                        expect((res.body)).to.equal(form);
                    });
                done();
            });
        });
    });
});

describe('SDCFormResponse', () => {
    var exampleID = "asdfasdfasd";
    var dp = {"_id" : Buffer.from(exampleID+"4", 'utf8').toString('hex'), name: "dp name"}
    var pa = {"_id" : Buffer.from(exampleID+"3", 'utf8').toString('hex'), name: "patient name"}
    var ff = {"_id" : Buffer.from(exampleID+"2", 'utf8').toString('hex'), name: "ff name",}
    var form = {"_id" : Buffer.from(exampleID+"1", 'utf8').toString('hex'), diagnosticProcedure: dp, questions: [6,7]}
    var id = "example"
    describe('/POST responses', () => {
        it('it should not POST a response without a diagnostic procedure object.', (done) => {
            let response = {
                patient: pa,
                SDCForm: {_id : exampleID+"3", diagnosticProcedure: null, questions: [6,7]},
                formFiller: ff,
            }
          chai.request("http://localhost:3001/api/SDCFormResponse")
              .post('/responses')
              .send(response)
              .end((err, res) => {
                  //console.log(res.status)
                    (res).should.have.status(400);
                
              });
              done();
        });
        it('it should not POST a response without patient or formfiller objects.', (done) => {
            let response = {
                patient: {something: "else"},
                SDCForm: form,
                formFiller: {something: "else"},
            }
          chai.request("http://localhost:3001/api/SDCFormResponse")
              .post('/responses')
              .send(response)
              .end((err, res) => {
                    (res).should.have.status(400);
                
              });
              done();
        });
        it('it should POST a SDCFormResponse', (done) => {
            let response = {
                patient: pa,
                SDCForm: form,
                formFiller: ff,
            }
          chai.request("http://localhost:3001/api/SDCFormResponse")
              .post('/responses')
              .send(response)
              .end((err, res) => {
                    (res).should.have.status(200);
                
              });
              done();
        });
    });
    describe('/PUT SDCFormResponse', () => {
        it('it should replace the specified SDCFormResponse', (done) => {
            let pa2 = {"_id" : Buffer.from(exampleID+"8", 'utf8').toString('hex'), name: "patient name 2"}
            let response = {
                    patient: pa2,
                    SDCForm: form,
                    formFiller: ff,
                }
            chai.request("http://localhost:3001/api/SDCFormResponse")
                .get('/responses')
                .query({diagnosticProcedure: dp._id, patientID: pa._id, formFillerID: ff._id})
                .end((err, res1) => {
                    let id = res1.body[0]._id;
                    chai.request("http://localhost:3001/api/SDCFormResponse")
                    .put('/responses/'+id)
                    .send(response)
                    .end((err, res) => {
                        (res).should.have.status(200);
                        expect((res)).to.be.an('object');
                        expect((res.body.diagnosticProcedure)).to.equal(dp._id);
                        expect((res.body.patient._id)).to.equal(pa2._id);
                        expect((res.body.formFiller._id)).to.equal(ff._id);
                    });
                
            });
            done();
        });
    });
    describe('/GET SDCFormResponse', () => {
        it('it should GET the specified SDCFormResponse', (done) => {
            chai.request("http://localhost:3001/api/SDCFormResponse")
                .get('/responses')
                .query({diagnosticProcedure: dp._id, patientID: pa._id, formFillerID: ff._id})
                .end((err, res) => {
                    (res).should.have.status(200);
                    expect((res)).to.be.an('object');
                    expect((res.body[0].diagnosticProcedure)).to.equal(dp._id);
                    expect((res.body[0].patient._id)).to.equal(pa._id);
                    expect((res.body[0].formFiller._id)).to.equal(ff._id);
            chai.request("http://localhost:3001/api/SDCFormResponse")
                .delete('/responses')
                .send(pa._id);
            done();
            });
        });
    });
});