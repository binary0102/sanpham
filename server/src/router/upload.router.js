import express from 'express';
import * as UploadController from '../controller/file.controller';
import upload from '../middleware/uploadfile.middleware';
import {handleAuthMiddleware} from '../middleware/handleAuth.middleware';
var router = express.Router();
router.post('/image/:productId',handleAuthMiddleware,upload.array('productImage'), UploadController.handleUploadImage);

export default router;
