const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParticipantsSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    email1: { 
        type: String,
        required: true
      },
    name1:{
        type: String,
        required: true
      },
    number1:{
        type: Number,
        required: true
      },
    school1: {
        type: String,
        required: true
    },
    rollno1:{
        type: String,
        required: true
    },
    class1:{
        type: Number,
        require: true
    },
    email2: { 
        type: String,
        required: true
      },
    name2:{
        type: String,
        required: true
      },
    number2:{
        type: Number,
        required: true
      },
    school2: {
        type: String,
        required: true
    },
    rollno2:{
        type: String,
        required: true
    },
    class2:{
        type: Number,
        require: true
    }
});
module.exports = Participant = mongoose.model('Participant',ParticipantsSchema);