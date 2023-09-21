import mongoose from "mongoose";

const messageCollection = "messages";

const messageSchema = new mongoose.Schema( {
    user: {
        type: String,
        required: true,
    },
    mensaje: {
        type: String,
        required: true,
    }
});

const messageModel = mongoose.model(messageCollection, messageSchema);
export { messageModel };