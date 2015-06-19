//var sinon = require('sinon');
var expect = require('chai').expect;
var request = require('supertest');

var app = require("../routes/v1/users/users");
//var userRoutesFunctions = require('../routes/v1/users/userRoutesFunctions');

describe("User Routes Functions", function() {
    it('respond with text', function(done){
      // the request-object is the supertest top level api
      request(app)
        .get('/')
        .set('Accept', 'html/text')
        .expect('Content-Type', /text/)
        .expect(200, done); // note that we're passing the done as parameter to the expect
    });
});
