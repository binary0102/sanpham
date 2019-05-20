import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartSchemal = new Schema({

    code : { type: String, default:""},
    customer: { ref: "User", type: Schema.Types.ObjectId},
    product_id: {ref:"Product", type: Schema.Types.ObjectId},
    quanlity: { type: Number},
    salechannel: {type: String, default: "local"},
    status: {type: String, default: ""},
    name: {type: String, default: ""},
    description : {type: String, default: ""},
    salePrice : { type: Number, },
    retailPrice : { type: Number, },
    image: {type: String,},
    slug: {type: String},
    title: {type: String},
    created_at: { 
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Cart', cartSchemal);
