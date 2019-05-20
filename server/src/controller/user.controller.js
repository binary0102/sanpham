import bcrypt from 'bcrypt';
import UserModel from '../model/user.model';
import CartModel from '../model/cart.model';

import { AuthServices } from '../helper/Auth';
async function handleRequestAuth(req, res, next) {
     try {
          const {token} = req.signedCookies;
         
          const query = "_id email avatar first_name last_name remember_token";
          const queryCart = "";
          let payload;
          if (token) {
                payload =AuthServices.verifyToken(token);
          }else {
                payload = {
                     id: req.user._id,
                }
          }
          let user = await UserModel.findOne({ _id: payload.id }).select(query).exec();
          let getCartOfUser = await CartModel.find({ customer: payload.id});
   
          if (!user) {
               user = {
                    _id: payload.id,
                    cart: getCartOfUser || [],
               }
          }else {
               user._doc.cart = getCartOfUser || [];
          }
          
          
         
         
         
          res.status(200).json({ user });
     }catch(error) {
          return res.status(200).send({code:404,message: error.message});
     }
}
async function login(req, res, next) {
     
     let email = req.body.email;
     let password = req.body.password ;
    
     let user;
     try {
        user = await UserModel.findOne({ email: email });
        if (!user) {
           
           return next(new Error("EMAIL_INCORRECT"))
     }
     }catch(error) {
         
        return res.status(404).send({code:404,message: error.message});
     }
     const valid = await bcrypt.compare(password, user.password);
     if (!valid) {
         return next( new Error('PASSWORD_INCORRECT'));
          
     }
     const token = AuthServices.createToken(user);
     user.remember_token = token;
     await user.save();
     res.cookie("token", token, {signed: true,express:  new Date(Date.now() + 900000)});
     res.status(200).json({ token: token,  user });
}
async function signup(req, res, next) {
     var findOfUser = await UserModel.findOne({ email: req.body.email });

     if (findOfUser) {
          throw new Error("User existing !");
     }
     const passwordHash = await bcrypt.hash(req.body.password, 10);
     const { email, firstName, lastName } = req.body;
     const user = new UserModel({
          email: email, first_name: firstName, last_name: lastName, password: passwordHash
     });
     const token = AuthServices.createToken(user);
     user.remember_token = token;
     user.save();
     res.status(200).json({ token: token, user: {...user} });
}
async function handleAuth(req, res, next) {
     const {token} = req.signedCookies;
     const query = "_id email avatar first_name last_name remember_token"
     let user;

     if (!token) {
          res.redirect(302,"");
          return 
     }
     
     const payload =AuthServices.verifyToken(token);
     try {
          user = await UserModel.findOne({ _id: payload.id }).select(query).exec();
          if (!user) {
             return next(new Error("NOT_ACCESS"))
          }
          user.id = undefined;
          res.status(200).json({ token: token,  user });
       }catch(error) {
          return res.status(404).send({code:404,message: error.message});
       }
}
export {
     login,
     signup,
     handleRequestAuth,
     handleAuth,
}