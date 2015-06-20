//var sinon = require('sinon');
var expect = require('chai').expect;
var supertest = require('supertest');
var app = require('../app');

describe("User Routes Functions", function() {
  it('responds with a list of users', function(done){
    supertest(app)
    .get('/v1/users')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res){
      if(err){
        console.log(err);
        console.log(res.body);
        throw err;
      }

      expect(res.body).to.have.length(3);
      expect(res.body).to.include('Hal', 'John', 'Betty');
      done();
    });

  });

  it('respond with json array', function(done){
      supertest(app)
        .get('/v1/users/new')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res){
          if(err){
            console.log(err);
            console.log(res.error);
            throw err;
          };

          var expectedUsers = ['John'];

          expect(res.body).to.have.length(1);
          expect(res.body).to.include('John');
          done();
        });
    });
});
