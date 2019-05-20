import ProductModel from '../model/product.model';
import UserModel from '../model/user.model';
import {AuthServices} from '../helper/Auth';
import mongoose from 'mongoose';
let randomUserId = mongoose.Types.ObjectId();
import express from 'express';
const  ProtectedRoutes = express.Router(); 
export async function handleAuthMiddleware(req, res, next) {
    try {
        let product = await ProductModel.findOne({_id: req.params.productId});
        if (!product) {
            res.status(402).send({message: "UPLOAD FAILD"});
        }
        req.Product = product;
        next();
    }catch(error) {
        res.status(402).send({message: "UPLOAD FAILD"});
    }
}
export  async  function handleTokenMiddleware(req, res, next) {
    try {
      
        if (req.signedCookies.token === undefined) {
              res.cookie("token", AuthServices.createToken({_id:randomUserId}), {domain:"localhost",signed: true,  expires: new Date(Date.now() + 900000)})
              req.user = {_id: randomUserId};
        }else {
            let  token =  AuthServices.verifyToken(req.signedCookies.token);
        
            let user = await UserModel.findOne({_id: token.id});
            
            if( user !== null ) {
                req.user = user;
           
            }else {
                req.user = {_id: token.id}
            }
        }
       
        next();
    }catch(error) {
      
    }
} 
ProtectedRoutes.use(handleTokenMiddleware)
export default ProtectedRoutes;