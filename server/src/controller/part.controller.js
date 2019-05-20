import PartModel from '../model/part.model';

async function createPart(req, res, next) {
    try {
        let {...partBody} = req.body;
        let part = new PartModel(partBody);
        await part.save();
        res.status(200).send({part: part});
    }catch(error) {

    }
}
async function updatePart(req, res, next) {
    try {
        let part = await PartModel.findOne({_id: req.params.partId});
        if (!part) {
            return res.status(401).send({message: "DON'T FOUND PART"})
        }
        for(let b in req.body ) {
            part[b] = req.body[b];
        }
        await part.save();
        return res.status(200).send({cart: cart});
    }catch(error) {
        
    }
}
async function deletePart(req, res, next) {
    console.log(req.query)
    try {
        let part = await PartModel.findOne({_id: req.params.partId});
        if (!part) {
            return res.status(401).send({message: "DON'T FOUND PART"})
        }
     //   await part.delete();
        return res.status(200).send({message: "DELETE_PART_SUCCESS"})
    } catch (error) {
        
    }
}   
async function getByIdPart(req, res, next) {
    try {
        let part = await PartModel.findOne({_id: req.params.partId});
        if (!part) {
            return res.status(401).send({message: "DON'T FOUND PART"})
        }
        return res.status(200).send({cart: cart})
    }catch (error) {
        
    }
}
export { 
    createPart,
    updatePart,
    deletePart,
    getByIdPart,
}