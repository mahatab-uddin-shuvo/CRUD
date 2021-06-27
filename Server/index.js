import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import bodyParser from 'body-parser'

import route from './Route/routes.js'
const app = express()

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/users',route);

const PORT = 8000;
const URL = 'mongodb://user:mernstack@crud-shard-00-00.k80lp.mongodb.net:27017,crud-shard-00-01.k80lp.mongodb.net:27017,crud-shard-00-02.k80lp.mongodb.net:27017/CRUD?ssl=true&replicaSet=atlas-148mpw-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>{
    app.listen(PORT,() =>{
        console.log(`Server is running on Port ${PORT}`)
    });
    console.log('Database Connected')
}).catch(error =>{
    console.log('Error: ', error.message)
})



