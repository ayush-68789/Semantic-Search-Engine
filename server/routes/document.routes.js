import express from 'express' 
const Router = express.Router() ;
import {generateDocumentEmbedding , createDocument} from '../controllers/document.controller.js'

Router.post('/embed' , generateDocumentEmbedding) ;
Router.post('/document', createDocument) ;

export default Router ;