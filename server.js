import express from 'express';
import mongoose from 'mongoose';
import Data from './data.js'
import Videos from './dbModel.js'
//app config
const app = express();
const port = process.env.PORT || 9000

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*"),
    res.setHeader("Access-Control-Allow-Headers","*"),
    next();
})
//db config
const connectionUrl = "mongodb+srv://admin:VZ9H8kC2dDqaTvT@cluster0.itcqx.mongodb.net/ticktok?retryWrites=true&w=majority"
mongoose.connect(connectionUrl,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

//api endpoint
app.get('/',(req,res) => res.status(200).send('hello world'))
app.get('/v1/posts', (req,res) => res.status(200).send(Data))

app.get('/v2/posts', (req,res) => {
    Video.find((err,data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
} )
app.post('/v2/posts', (req,res) => {
    //POST request to ADD DATA to the database
    //it will let us ADD  avideo DOCUMENT to the videos COLLECTION
    const dbVideos = req.body
    Videos.create(dbVideos,(err,data) => {
        if (err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)

        }
    })
})

//listen
app.listen(port,()=>console.log(`listening on localhost:${port}`))