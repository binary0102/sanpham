import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    client_id: {
     type: Schema.Types.ObjectId,
    },
    thread_id: {
        type: Schema.Types.ObjectId,
        ref : "Thread"
    },
    message : {
        type: String, 
    },
    created_at: { 
        type: Date,
        default: Date.now()
    },
 
});

module.exports = mongoose.model('Message', messageSchema);
