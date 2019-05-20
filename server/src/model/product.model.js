import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchemal = new Schema({

   name: {type: String, default: ""},
   code: {type: String, default: ""},
   image: { type: String, default: ""},
   image2: { type: String, default: ""},
   images: {type : [String], default: ""},
   slug: { type: String, default: ""},
   title: { type: String , default: ""},
   retailPrice: { type: Number , default: ""},
   salePrice: { type: Number , default: ""},
   numberOfVariations: { type: Number, default: ""},
   quantity: { type: Number, default: ""},
   cost: {type: Number, default: ""},
   unit_price: {type: String, default: ""},
   user_id: { type: Schema.Types.ObjectId, ref: 'User'},
   discount: {type: Number, default: ""},
   properties: {type: String, default: ""},
   content: { type: String, default: ""},
   category: { type: String, default: ""},
   description : { type: Schema.Types.Mixed},
   parts: [{part_id :{ type: Schema.Types.ObjectId, ref: "Part"},
          quanlity: {type: Number},            
}],
   id: {type: Schema.Types.ObjectId},
   created_at: { 
      type: Date,
      default: Date.now()
  },
  updated_at: {
      type: Date,
      default: Date.now()
  }
},{virtuals: true, versionKey: false});


productSchemal.methods.productShow = function () {
   let returnObject = { 
      title: this.title,
      salePrice : this.salePrice,
      retailPrice: this.retailPrice,
      slug: this.slug,
      quantity: this.quantity,
      numberOfVariations: this.numberOfVariations,
      discount: this.discount,
      image: this.image,
      image2: this.image2,
    }
   return returnObject;
}
module.exports = mongoose.model('Product', productSchemal);
