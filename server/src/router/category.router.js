import express from 'express';
import * as CategoryController from '../controller/category.controller';
var router = express.Router();
router.post('/', CategoryController.createCategory);
router.get('/:categoryId', CategoryController.findById);
router.get('/filter/:categoryName',CategoryController.findGetFilter)
router.get('/search/:categoryName',CategoryController.findCategoryByName)
router.post('/update', CategoryController.updateCategory);
export default router;
