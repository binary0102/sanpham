import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sessionSchemal = new Schema({

   _id : false,
   id: { type: String},
   cart: { type: [Schema.Types.String]},
        
});

module.exports = mongoose.model('Session', sessionSchemal);
