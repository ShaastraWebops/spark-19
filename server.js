const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Participant = require('./models/Participants')
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/spark-19',{
    useNewUrlParser:true
});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB connection established")
});
app.post('/',(req,res)=>{
    const participant = new Participant(req.body);
    participant.save()
    .then(participant=>{
        res.status(200).json({'participant':'successfully submitted'})
        console.log(participant)
    })
    .catch(err=>{
        res.status(400).send('failed')
    });
})
const port = 4000;
app.listen(port, ()=> console.log(`server started on port ${port}`));
