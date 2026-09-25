import generateEmbedding from '../services/embedding.service.js'

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

export default generateDocumentEmbedding ;