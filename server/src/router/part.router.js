import express from 'express';
import {
    createPart,updatePart,deletePart,getByIdPart
} from '../controller/part.controller';
var router = express.Router();


router.get('/:partId',getByIdPart)
router.post('/', createPart);
router.delete('/', deletePart);
router.patch('/:partId', updatePart);   


export default router;