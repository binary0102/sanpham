import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: { type: String, },
    email: { type: String, },
    password: { type: String,  },
    first_name : { type: String, default: ""},
    last_name: {type: String, default: ""},
    birth_day: {type: Date, default:null},
    provider: {type: String, default:"local"},
    role: {type: String, default: ""},
    remember_token: {type: String, default:""},
    product_id: { type: Schema.Types.ObjectId, ref: "Product"},
    address: {type: Array, default: ""},
    avatar: { type: String, default: null},
    cart_id: [{type : Schema.Types.ObjectId, ref: "Cart"}],
    created_at: { 
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
        
});
UserSchema.set('toJSON', {virtuals: true});
UserSchema.method.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
}
module.exports = mongoose.model('User', UserSchema);
