import sharp from 'sharp';

export function handleFile(pathImage, size, desImage) {
    console.log(desImage);
    sharp(pathImage).resize(size.width, size.height).toFile(desImage, function(err){
        console.log(err);
    })
}
export function handleSize(images) {
  /*  array.forEach(element => {
       
    });*/

    handleFile(images.path,{width: 260, height: 325},'uploads/product/w260/'+images.filename);
    handleFile(images.path,{width: 380, height: 475},'uploads/product/w380/'+images.filename);
    handleFile(images.path,{width: 510, height: 637},'uploads/product/w510/'+images.filename);
}