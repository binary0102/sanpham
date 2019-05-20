import express from 'express';
import * as ProductController from '../controller/product.controller';
import upload from '../middleware/uploadfile.middleware';

var router = express.Router();
router.get('/getAll', ProductController.getListProduct)

router.get('/:slugProduct', ProductController.getBySlug);
router.get('/id/:productId', ProductController.getById);
router.post('/',upload.array('productImage'),ProductController.createProduct);
router.delete('/:productId', ProductController.deleteById);
router.patch('/:productId',ProductController.update);
//router.get('/:categoryId', ProductController.getListProduct);
router.post('/upload', ProductController.createMany);
router.post('/upload1', ProductController.updateMany);



export default router;