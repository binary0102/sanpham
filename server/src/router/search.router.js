import express from 'express';
import * as SearchController from '../controller/search.controller';
var router = express.Router();
router.get('/', SearchController.searchCart);
export default router;