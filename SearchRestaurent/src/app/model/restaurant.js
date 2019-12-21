const mongoose = require('mongoose');

const postRestaurent = new mongoose.Schema({
    // location: {
    //     latitude: String,
    //     longitude: String
    // },
    distance: String,
    rating: Number,
    restaurentName: String,
    cuisien_name: String,
    budget: Number,
    menu: String,
    city: String,
    date: { type: Date, default: Date.now()},
    // menu: [{
    //     type: String
    // }],
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const restaurent = mongoose.model('Post' , postRestaurent);

module.exports = restaurent;