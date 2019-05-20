import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import userRouter from './router/user.router';
import ProductRouter from './router/product.router';
import SaleRouter from './router/sale.router';
import CategoryRouter from './router/category.router'
import CartRouter from './router/cart.router';
import SearchRouter from './router/search.router';
import InvoiceRouter from './router/invoice.router';
import ThreadRouter from './router/thread.router';
import UploadRouter from './router/upload.router';
import PartRouter from './router/part.router';
import ProtectedRoutes,{ handleTokenMiddleware} from './middleware/handleAuth.middleware'
var app = express();
dotenv.config();
var whitelist =  process.env.WHILELIST.split(",")

var corsOptions = {
  origin:   function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin )  {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  } ,
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS','PATCH'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
}
mongoose.connect(process.env.MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true },function (err) {
  if (err) throw err;
});

app.options('/api',cors());

app.use(cors(corsOptions ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser(process.env.PRIVATE_KEY));

app.use(function(req, res, next) {
  req.headers['if-none-match'] = 'no-match-for-this';
  next();    
});
app.use(handleTokenMiddleware)
app.use('/api', userRouter);
app.use('/api/product', ProductRouter);
app.use('/api/sales',SaleRouter);
app.use('/api/categories', CategoryRouter);
app.use('/api/cart', CartRouter);
app.use('/api/search',SearchRouter);
app.use('/api/invoice',InvoiceRouter);
app.use('/api/part',PartRouter )
app.use('/api/thread', ThreadRouter);
app.use('/api/upload',UploadRouter);
app.use((error, req, res, next) => {
  
  if (error) {
    return res.status(401).send({code:401,message: error.message});
  }
})
app.listen(process.env.PORT, function() {
  console.log("Server listening on port ", process.env.PORT);
})  
