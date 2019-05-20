import mongoose from "mongoose";

const Schema = mongoose.Schema;

const invoiceSchemal = new Schema({

    code : { type: String, default:""},
    customer: { default:null, type: Schema.Types.ObjectId},
    product_id: [{
        _id:false,
        product: {default:null, type: Schema.Types.ObjectId}, 
        quantity:{type: Number, default: 0}, 
    }],
    seller:{default:null, type: Schema.Types.ObjectId},
    cart_id:[{default:null, type: Schema.Types.ObjectId}],
    seller:{default:null, type: Schema.Types.ObjectId},
    payment_method: {type: String, default: ""},
    salechannel: {type: String, default: "local"},
    status: {type: String, default: ""},
    description : {type: String, default: ""},
    total: {type: Number, default: 0},
    total_payment: {type: Number, default: 0},
    created_at: { 
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Invoice', invoiceSchemal);
