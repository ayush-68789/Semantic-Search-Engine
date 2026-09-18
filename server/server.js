import express from 'express' ;
const app = express() ;

import dotenv from 'dotenv' ;
dotenv.config() ; 

import connectDB from './config/db.js' ;

app.use(express.json()) ;

app.get('/', (req, res) => {
    res.json({
        Message : "running"
    })
})

const PORT = process.env.PORT ; 
app.listen(PORT, async () => {
    await connectDB() ;
    console.log('-'.repeat(20)) ; 
    console.log('Server running');
    console.log('-'.repeat(20)) ; 
})