const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const   VenueSchema  = new Schema({
    city: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    reporting_time: {
        type: String,
        required: true
    },
    starting_time: {
        type: String,
        required: true
    },
    results: {
        type: String,
        required: true
    },
    venue_name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
});
module.exports = Venue = mongoose.model('Venue', VenueSchema);