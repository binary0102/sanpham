import express from 'express';
import {
    createInvoice,
    deleteInvoice,
    getInvoices,
    getSingleInvoice,
    updateInvoie,
    handleQuery
} from '../controller/invoice.controller';
var router = express.Router();

router.get('/', getInvoices);
router.get('/filter',handleQuery);
router.get('/:invoiceId', getSingleInvoice);

router.post('/', createInvoice);
router.delete('/:invoiceId', deleteInvoice);
router.patch('/:invoiceId', updateInvoie);


export default router;