import generateEmbedding from '../services/embedding.service.js'
import Document  from '../model/document.js';

const generateDocumentEmbedding = async(req, res ) => {
    try {
        const {text} = req.body ;
        if (!text || !text.trim()) {
            return res.status(400).json({
                success: false,
                message: "Text is required",
            });
        }
        const embedding = await generateEmbedding(text);
        return res.status(200).json({
            success: true,
            embedding,
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const createDocument = async(req, res) => {
    try{
        const {content} = req.body ;
        if(!content)
        {
            return res.status(400).json({
                success: false,
                message: "Content is required",
            });
        }
        const embedding = await generateEmbedding(content);
        const document = await Document.create({
            content,
            embedding,
        });

        return res.status(201).json({
            success: true,
            message: "Document created successfully",
            data: document,
        });
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

export {
    generateDocumentEmbedding, 
    createDocument
} ;