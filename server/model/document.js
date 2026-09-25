import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
            trim: true,
        },

        embedding: [
            {
                type: Number,
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    },
);
const Document = mongoose.model("Document", documentSchema);
export default Document;