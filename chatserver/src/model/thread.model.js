import mongoose from "mongoose";

const Schema = mongoose.Schema;

const threadSchema = new Schema({

    name: {
        type: String,
    },
    participants : [
        {
            type: Schema.Types.ObjectId,
            default:null,
        }
    ],
    current_message: {
        message: {
            type: String,
            default: "",
        },
        client_id: {
            type: Schema.Types.ObjectId,
            default: null,
        },
        date: {
            type: Date,
            default : Date.now(),
        }
    },
    avatar: { 
        type: String,
        default: "",
    },
    created_at: { 
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    _v: false,
},{versionKey: false });

module.exports = mongoose.model('Thread', threadSchema);
