
import CartModel from '../model/cart.model';
import ProductModel from '../model/product.model';


export function handleQuery(req, res, next) {
    const { start, end } = req.query;
    const Start = new Date(parseInt(start));
    const End = new Date(parseInt(end));
    return CartModel.count({ updated_at: { $gte: Start, $lte: End } })
        .then(cart => {
            return cart;
        })
        .then(cart => {
            res.status(200).send({ result: cart });
        })

}

export async function createCartById(req, res, next) {
    let { productId } = req.params;
    let quanlity = req.body.quanlity;
    const { user } = req;
    let queryProduct = "_id image retailPrice salePrice title slug";
    let cart;
    try {
        let cart = await CartModel.findOne({ customer: user._id, product_id: productId });
        if (!cart) {
            let product = await ProductModel.findOne({ _id: productId }).select(queryProduct);
            if (!product) {
                new Error("NOT_FOUND_PRODUCT");
            }
            let cartBody = {
                image: product.image,
                retailPrice: product.retailPrice,
                salePrice: product.salePrice,
                title: product.title,
                slug: product.slug,
                quanlity: 1,
                customer: req.user._id,
                product_id: productId,
            
            }
             cart = new CartModel(cartBody);
            await cart.save();
        }else {
            cart.quanlity+=Number(quanlity);
            await cart.save();
        }

 
        return res.status(200).send({ cart: cart });
} catch (error) {
    return res.status(404).send({ error: error.message });
}
}
export async function getCarts(req, res, next) {
    try {
        const carts = await CartModel.find({}).exec();
        res.status(200).send({ code: 200, cart: carts });
    } catch (error) {
        return res.status(200).send({ code: 400, error: error.message });
    }
}
export async function getSigleCart(req, res, next) {
    try {
        const cartId = req.params.cardId;
        const query = "";
        const cart = await CartModel.findOne({ _id: cartId }).exec();
        res.status(200).send({ code: 200, cart: cart });
    } catch (error) {
        return res.status(200).send({ code: 400, error: error.message });
    }
}
export async function updateCart(req, res, next) {
    try {

    } catch (error) {

    }
}
export async function deleteCart(req, res, next) {
    try {
        const id = req.params.cardId;
        const card = await CartModel.findOne({ _id: id }).exec();
        res.status(200).send({ cart: cart });
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }
}
function getCurrentCart() {
    let currentOfCart = CartModel.count().exec();
    return currentOfCart;
}

