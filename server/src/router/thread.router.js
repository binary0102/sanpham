import express from 'express';
import * as threadController from '../controller/thread.controller';
var router = express.Router();
router.get('/',threadController.getThreads);
router.get('/:threadId', threadController.getSigleThread);
router.patch('/:threadId', threadController.updateThread);
router.delete(':/threadId',threadController.deleteThread);
router.post('/', threadController.createThread);

export default router;