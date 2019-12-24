const path = require('path')
const env = require('dotenv/config');
const bluebird = require('bluebird');
const config = process.env.MONGO_TESTDB;
// console.log("2222" ,config);
 // process.env.MongoUrl = "mongodb://localhost/OrderManagement";
// console.log("444444" ,config);
// import * as http from 'http';                    //need to implement
// import '../model/order-model';
const model = require('../model/order-model');
let mongoose = require("mongoose");
let Order = mongoose.model("Order")
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
var sinon = require('sinon');
var sinonTest = require('sinon-test');
var test = sinonTest(sinon);
// import app from '../../app';
const app = require('../../app');

let should = chai.should();
const expect = chai.expect;
const supertest = require('supertest');
const viewOrders = require('../controllers/view-orders');
const mongo = require('mongoose');
// import {viewOrders} from '../controllers/view-orders';
// import { mongo } from 'mongoose';



chai.use(chaiHttp);
//Our parent block
describe('Order', () => {
    beforeEach((done) => { //Before each test we empty the database
        Order.remove({}, (err) => { 
           done();         
        });     
    });
});

describe('GET/vieworders', () => {
   it('it should GET all the Order', (done) => {
      chai.request(app)
          .get('/vieworders')
          .end((err, res) => {
               // console.log(res);
               res.should.have.status(200);
               res.body.should.be.a('array');
              // res.body.length.should.be.eql(0);
            done();
          });
    });
});


describe('/POST /placeorder', () => {
    it('it should Create a order', (done) => {
      let order = {
        name: "pasta",
        type: "italie food",
        quantity: 9,
        price: 500,
        orderId: 3,
        city: "Bangalore",
        restaurentId: "5df5a6faf59998720c390e27"
    }

      chai.request(app)
          .post('/placeorder')
          .send(order)
          .end((err, res) => {
              // console.log(res.body)
              res.should.have.status(200);
              res.body.should.be.a('object');
              
              res.body.data.should.have.property('name');
              res.body.data.should.have.property('restaurentId');
            //    res.body.should.have.property('name').eql('TEST-123');
            //   res.body.should.have.property('budget').eql(250);
              

            done();
          });
    });

});

// deleteeeeeeeeeeeeeeeeeeeeeeee
// describe('/Delete/cancelorder', () => {
//   it('it should Delete order', (done) => {
//     let order = {
//       name: "pasta",
//       type: "italie food",
//       quantity: 9,
//       price: 500,
//       orderId: 3,
//       city: "Bangalore",
//       restaurentId: "5df5a6faf59998720c390e27"
//   }

//     chai.request(app)
//         .delete('/cancelorder')
//         .send(order)
//         .end((err, res) => {
//             console.log(res.body)
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             // res.body.data.should.have.property('name');
//             // res.body.data.should.have.property('restaurentId');            

//           done();
//         });
//   });

// });

