import express from 'express';
import * as userController from '../controller/user.controller';
var router = express.Router();

router.post('/login', userController.login);
router.get('/account/', userController.handleAuth);
router.get('/auth', userController.handleRequestAuth);
router.post('/signup',userController.signup);
router.get('/test', function(req, res, next) {
    res.redirect("/home");
})
export default router;