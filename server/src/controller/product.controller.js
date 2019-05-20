import ProductModel from '../model/product.model';
import { handleSize } from '../helper/handleImage';
import PartModel from '../model/part.model';
async function getById(req, res, next){
    const { productId} = req.params;
    
    const query = "_id retailPrice salePrice quantityAvailable quantity name description images title parts"
    const partQuery = "_id price name code";
    let product;
    try {
        product = await ProductModel.findOne({_id : productId}).select(query);
        if (!product) {
            throw new Error("PRODUCT_NOT_FOUND");
        }
        let description = product.description;

        let arrayPartId = product.parts.map(part => part.part_id);
       
        let parts = await PartModel.find({_id: {"$in": arrayPartId}}).select(partQuery);
         
        let partAndQuanlity = product.parts.map(partOfProduct => {
          
           let findPart =  parts.find((part) => part._id.toString() === partOfProduct.part_id.toString());
 
           
            return {
                ...findPart._doc,
                quanlity: partOfProduct.quanlity,
            }
        })
    
        return res.status(200).send({product : product, description: description,parts: partAndQuanlity})
    }catch(error){
        return res.status(404).send({code:404, message: error.message});
    }
}
 async function getBySlug(req, res, next) {
    const { slugProduct } = req.params;
    const query = "_id retailPrice salePrice  quantity  description image image2 slug images title"
    let product;
    try {
        product = await ProductModel.findOne({slug : slugProduct}).select(query).exec();
        if (!product) {
            throw new Error("PRODUCT_NOT_FOUND");
        }
        let description = product.description;
         product.description = undefined;
        return res.status(200).send({product : product, description: description})
    }catch(error){
        return res.status(404).send({code:404, message: error.message});
    }
}
async function createProduct(req, res, next){
 
    let product;
    let arrayImage = req.files.map(function(data) {  
        
        return data.filename
    });

    productBody.images = arrayImage;
   
    
    try {
        product = await new ProductModel(productBody);
        
        if (!product) {
            throw new Error("save error");
        }
      
        await product.save();
        return res.status(200).send({code: 200, data: product});
    } catch (error) {
        return res.status(404).send({ code: 404, message: error.message});
    }
}
async function deleteById(req, res, next){

}
async function update(req, res, next){
   const productId = req.params.productId;
   const query = "_id retailPrice salePrice  quantity name description images title";
   let product;
   try {
        product = await ProductModel.findOne({_id :productId}).select(query); 
        for( let b in req.body ){
            product[b] = req.body[b];
        }    
        await product.save();
        return res.status(200).send({code: 200, message:"UPDATE_SUCCESS"});

   }catch(error) {
        return res.status(200).send({ code: 404, message: error.message});
   }
}
async function createMany(req, res, next) {
    const data = req.body.data;
    const doc = JSON.parse(data);
    
    ProductModel.insertMany(doc, function (err, docs) {
        if (err){ 
            return console.error(err);
        } else {
          console.log("Multiple documents inserted to Collection");
        }
    });
    res.status(200).send("OK");
}
async function updateMany(req, res, next) {
    const data = req.body.data;
    const doc = JSON.parse(data);
    
    doc.map(async function (d)  {
       await  ProductModel.updateOne({ _id: d }, { category: "Vòng tay"});
    });
  
    res.status(200).send("OK");
}
async function getListProduct(req, res, next) {
    const query = "_id retailPrice salePrice  quantity name description images title category"

    let product;
    try {
        product = await ProductModel.find({}).select(query);
        if (!product) {
            throw new Error("PRODUCT_NOT_FOUND");
        }

        return res.status(200).send({product : product})
    }catch(error){
        return res.status(404).send({code:404, message: error.message});
    }
}
export {
    updateMany,
    createMany,
    getById, 
        createProduct, 
    deleteById, 
    update, 
    getListProduct,
    getBySlug

}