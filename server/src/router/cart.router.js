import express from 'express';
import {
    createCartById,
    handleQuery
} from '../controller/cart.controller';
var router = express.Router();
router.get('/search',handleQuery)
router.post('/:productId', createCartById);

export default router;