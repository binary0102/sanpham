import express from 'express';
import * as SaleController from '../controller/sale.controller';
var router = express.Router();
router.get('/categoryId', SaleController.getById);
export default router;