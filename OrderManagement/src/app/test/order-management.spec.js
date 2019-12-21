
// import dotenv from 'dotenv';
// import path from 'path';
// const bluebird = require('bluebird');
// import config from '../config/index';
// // console.log("2222" ,process.env.MongoUrl);
//  // process.env.MongoUrl = "mongodb://localhost/OrderManagement";
// console.log("444444" ,config);
// import * as http from 'http';
// import '../model/order-model';
// let mongoose = require("mongoose");
// let Order = mongoose.model("Order")
// //Require the dev-dependencies
// let chai = require('chai');
// let chaiHttp = require('chai-http');
// var sinon = require('sinon');
// var sinonTest = require('sinon-test');
// var test = sinonTest(sinon);
// import app from '../../app';

// let should = chai.should();
// const expect = chai.expect;
// const supertest = require('supertest');
// import {viewOrders} from '../controllers/view-orders';
// import { mongo } from 'mongoose';



// chai.use(chaiHttp);
// //Our parent block
// describe('Order', () => {
//     beforeEach((done) => { //Before each test we empty the database
//         Order.remove({}, (err) => { 
//            done();         
//         });     
//     });
// });

// describe('/GET /vieworders', () => {
//    it('it should GET all the Order', (done) => {
//       chai.request(app)
//           .get('/vieworders')
//           .end((err, res) => {
//              console.log(res);
//              // res.status.should.have.status(200);
//               res.body.data.should.be.a('array');
//              res.body.data.length.should.be.eql(0);
//             done();
//           });
//     });
// });