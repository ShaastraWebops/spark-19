// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();
// const Participant = require('./models/Participants')
// app.use(cors());
// app.use(bodyParser.json());
// mongoose.connect('mongodb://127.0.0.1:27017/spark-19',{
//     useNewUrlParser:true
// });
// const connection = mongoose.connection;
// connection.once('open', ()=>{
//     console.log("MongoDB connection established")
// });
// app.post('/',(req,res)=>{
//     const participant = new Participant(req.body);
//     participant.save()
//     .then(participant=>{
//         res.status(200).json({'participant':'successfully submitted'})
//         console.log(participant)
//     })
//     .catch(err=>{
//         res.status(400).send('failed')
//     });
// })
// const port = 4000;
// app.listen(port, ()=> console.log(`server started on port ${port}`));
const express = require('express');
const next = require('next')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const Participant = require('./models/Participants')
const handle = app.getRequestHandler()
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/Spark-19',{
    useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB connected')
})
app.prepare().then(()=>{
    const server = express()
    server.use(bodyParser.json());
    server.use(cors());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.get('/',(req,res)=>{
        return app.render(req,res,'/',req.query)
    })
    server.post('/',(req,res)=>{
        const participant = new Participant(req.body);
        participant.save()
        .then(participant=>{
            res.status(200).json({'participant':'successfully submitted'})
            res.redirect('/');
        })
        .catch(err=>{
            res.status(400).send('failed')
            console.log(err)
        });
    })
    server.get('/admin',(req,res)=>{
        return app.render(req,res, '/admin', req.query)
    })
    server.get('/api/getParticipantData',(req,res)=>{
        Participant.find((err,participants)=>{
            if(err){
                console.log(err)
            } else {
                res.json(participants)
            }
        })
    })
    server.get('*', (req,res)=>{
        return handle(req,res)
    })
    server.listen(port, err=>{
        if(err) throw err
        console.log(`Server Ready on Port ${port}`)
    })
})