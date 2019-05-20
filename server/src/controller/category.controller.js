import CategoryModel from '../model/category.model';
import ProductModel from '../model/product.model';
import {handeleSort} from '../helper/help'
async function createCategory(req, res, next) {
  const { ...categoryBody } = req.body;
  categoryBody.product_id = JSON.parse(categoryBody.product_id);

  let category;
  try {
    category = new CategoryModel(categoryBody);
    category.save();
    return res.status(200).send({ category: category });
  } catch (error) {

  }
}
async function findGetFilter(req, res, next) {
  const {categoryName} = req.params;
  let query = "_id name right left parrent slug"
  let category = await CategoryModel.findOne({ slug: categoryName});
  let getCategoiesChild = await CategoryModel.find({ left: {"$gt": category.left }, right: {"$lt": category.right}}).select(query);
  res.status(200).send(getCategoiesChild);
}
async function   findCategoryByName(req, res, next) {
  try {
    const queryProduct = "_id retailPrice salePrice  quantity slug  image image2 discount title "
    const {categoryName} = req.params;
    let getIdOfProduct ;
  
    let category = await CategoryModel.findOne({ slug: categoryName});
    
    let getCategoiesChild = await CategoryModel.find({ left: {"$gt": category.left }, right: {"$lt": category.right}});
    
   /*  if (getCategoiesChild.length >  0 ) {
        getIdOfProduct = getCategoiesChild.map(category => {
        category.product_id
    });
    } */
   
    let arrayCategory = [];
    for (let indexCategory =0 ; indexCategory < getCategoiesChild.length;indexCategory++) {
        arrayCategory[indexCategory] = getCategoiesChild[indexCategory]._doc;
        
       
        arrayCategory[indexCategory].product = await ProductModel.find({_id : {$in : getCategoiesChild[indexCategory].product_id}}).select(queryProduct);
        delete arrayCategory[indexCategory].product_id;
    }
 
    if (getCategoiesChild.length === 0) {
      getIdOfProduct = category.product_id;
  
      let getProductOfCategory = await ProductModel.find({_id : {$in : getIdOfProduct}}).select(queryProduct);
     
      category.product_id = undefined;
      arrayCategory[0]= category._doc;
      arrayCategory[0].product = getProductOfCategory;
      
    }
  res.status(200).send(
      
        arrayCategory
    ); 
    res.status(200).send(arrayCategory)
  } catch (error) {
    
  }
}
async function findById(req, res, next) {
  var query = 'title salePrice retailPrice slug quantity numberOfVariations discount image image2 category';
  var queryCategory = '_id name product_id';
  let categories;
  let {sort} =  req.query;
  sort = handeleSort(sort)
  if(typeof(req.params.categoryId) === "string") {
    categories = req.params.categoryId.split(",");
  }else {
    throw new ("Error")
  }

  let category, product;
  try {

      category = await CategoryModel.find({ _id: { $in: categories} }).select(queryCategory).exec();
      let temp = [];
      let temp1 = [];
      for(let i =0 ; i < category.length; i++) 
      {
          temp = temp.concat(category[i].product_id);
          temp1 = temp1.concat({id:category[i]._id, name:category[i].name });
      }
   
    if (!category) {
      throw new Error('not found Categories');
    }

      
      product = await ProductModel.find({ _id: { $in: temp} }).select(query).sort(sort).exec();
  
    return res.status(200).send({categories: temp1, product: product  });
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
}
async function deleteById(req, res, next) {

}
async function update(req, res, next) {

}
async function updateCategory(req, res, next) {
  const data = req.body.data;
  const doc = JSON.parse(data);
  const test = [];
  let product;
  try {
    for (let i = 0; i < doc.length; i++) {
      product = await ProductModel.find({ id: doc[i] });
      test.push(product[0]._id.toString());
    }
    
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }

 await CategoryModel.updateOne({name: "Vòng cổ"}, { product_id: test});



  res.status(200).send("OK");
}

export {
  updateCategory,
  createCategory,
  findById,
  findCategoryByName,
  findGetFilter,
}