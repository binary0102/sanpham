import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const partSchemal = new Schema({

   name: {type: String, default: ""},
   code: {type: String, default: ""},
  
   images: {type : [String], default: ""},
   price: { type: Number , default: ""},
   quantity: { type: Number, default: ""},
   category: { type: String, default: ""},
   description : { type: Schema.Types.Mixed},
   created_at: { 
      type: Date,
      default: Date.now()
  },
  updated_at: {
      type: Date,
      default: Date.now()
  }
},{virtuals: true, versionKey: false});

module.exports = mongoose.model('Part', partSchemal);
