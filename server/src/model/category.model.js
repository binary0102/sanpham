import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    name: String,
    slug: String, 
    product_id: [
        {type: Schema.Types.ObjectId, ref:"Product"}
    ], 
    parrent: String, 
    left: String, 
    right: String,
},{versionKey: false })
module.exports = mongoose.model('Category', CategoriesSchema);
