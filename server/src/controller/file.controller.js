
async function handleUploadImage (req, res, next) {
    let Product = req.Product
    let arrayImage = req.files.map(function(data) {  
 
        return data.filename
    });

    Product.images = Product.images.concat(arrayImage);
   
    try {
        await Product.save();
        return res.status(200).send({code: 200, message: "UPLOAD_SUCCESS"});

    } catch (error) {
     //   return res.status(404).send({ code: 404, message: error.message});
    }
}
export {
    handleUploadImage
}