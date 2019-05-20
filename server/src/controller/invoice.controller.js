import InvoiceModel from '../model/invoice.model';


export async function getInvoices(req, res, next){
    try {
        let invoice = await InvoiceModel.find({});
        if (!invoice) {
            return next( new Error("FAILD"));
        }
        return res.status(200).send({code: 200, invoice: invoice});
    }catch (error) {
        return res.status(404).send({error: error.message});
    } 
}
export  async function getSingleInvoice(req, res, next){
    try {
        let invoiceId = req.params.invoiceId;
        
        let invoice = await InvoiceModel.findOne({_id : invoiceId});
        if (!invoice) {
            return next( new Error("NOT FOUND INVOICE"));
        } 
        return res.status(200).send({code: 200, invoice: invoice});
    } catch (error) {
        return res.status(404).send({error: error.message});
    } 
}
export async function updateInvoie(req,res, next) {
    
    try {
        let invoiceId = req.params.invoiceId;
        let invoice = await InvoiceModel.findOne({_id : invoiceId});
        if (!invoice) {
            return next( new Error("NOT FOUND INVOICE"));
        } 
        if (req.body.product_id !== undefined) {
            req.body.product_id = JSON.parse(req.body.product_id);
        }
        for(let b in req.body) {
            invoice[b] = req.body[b]; 
        }
        await invoice.save();
        return res.status(200).send({code: 200, invoice: invoice,message: "UPDATE SUCCESS"});
    } catch (error) {
        return res.status(404).send({error: error.message});
    } 
}
export async function deleteInvoice(req, res, next) {
    try {
        let invoiceId = req.params.invoiceId;   
        let invoice = await InvoiceModel.findOne({_id : invoiceId});
        if (!invoice) {
            return next( new Error("NOT FOUND INVOICE"));
        } 
        await invoice.delete();
        return res.status(200).send({code: 200, invoice: invoice, message: "DETELE SUCCESS"});
    }catch(error) {
        return res.status(404).send({error: error.message});
    }
}
export async function  createInvoice(req, res, next) {
  
    try {
        let {...invoiceBody} = req.body;
     
        invoiceBody.product_id = JSON.parse(invoiceBody.product_id);
        let invoice = new InvoiceModel(invoiceBody);
        await invoice.save();
        return res.status(200).send({code: 200, invoice: invoice,  message: "CREATE SUCCESS"});
    } catch (error) {
        return res.status(404).send({error: error.message});
    } 
   
}
export async function handleQuery(req, res, next) {
    try {
     
        if (req.query.totalvalue !== undefined && req.query.start  !== undefined  && req.query.end ) {
            const test = await InvoiceModel.aggregate([
                
                  {$match: {
                        "updated_at": {
                            $gte : new Date("2019-05-03T08:10:54.495+00:00"),
                            $lte : new Date("2019-05-05T04:06:24.303+00:00")
                         }
                    }},
                    {$project:{
                        "year":{$year:"$updated_at"}, 
                        "month":{$month:"$updated_at"}, 
                        "day": {$dayOfMonth:"$updated_at"},
                        "total" : "$total"
                    }},
                    {$group:{
                        _id:{year:"$year", month:"$month", day:"$day"}, 
                        "total":{$sum:"$total"}
                    }}
            ]).exec()
            res.send(test);
        }    
      
    }catch(error) {
        res.status(404).send({error: error.message});
    }
}