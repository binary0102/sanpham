import multer from 'multer';
import { Types } from 'mongoose';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/product');
    },
    filename: function(req, file, cb) {
        const ObjectId = new Types.ObjectId;

        if (file.mimetype === 'image/png') {
            cb(null, ObjectId + '.png');
        }else if (file.mimetype === 'image/jpeg') {
            cb (null, ObjectId + '.jpg');
        }   
    }
})

const upload = multer({storage: storage,
    
});
const upload1 = multer({dest: './public',
    fileFilter(req, file, cb) {
      
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpng') {
            return cb(null, true);
        }
        cb(null, false, new Error('I don\'t have a clue'));
    },
   
});
export default upload;
