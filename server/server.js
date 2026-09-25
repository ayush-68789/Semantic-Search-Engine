import 'dotenv/config' ;
// dotenv.config() ; 
import express from 'express' ;
const app = express() ;

import connectDB from './config/db.js' ;
import documentRoutes from './routes/document.routes.js' ;

import morgan from 'morgan';

app.use(express.json()) ;
app.use(morgan('dev')) ;

app.use(documentRoutes) ;

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