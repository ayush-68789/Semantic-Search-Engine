import express from 'express' 
const Router = express.Router() ;
import generateDocumentEmbedding from '../controllers/document.controller.js'

Router.post('/embed' , generateDocumentEmbedding) ;

export default Router ;