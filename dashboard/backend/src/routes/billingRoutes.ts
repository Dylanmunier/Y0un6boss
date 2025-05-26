import { Router } from 'express';
import { createInvoice, getInvoices, updateInvoice, deleteInvoice } from '../controllers/billingController';

const router = Router();

// Route to create a new invoice
router.post('/invoices', createInvoice);

// Route to get all invoices
router.get('/invoices', getInvoices);

// Route to update an existing invoice
router.put('/invoices/:id', updateInvoice);

// Route to delete an invoice
router.delete('/invoices/:id', deleteInvoice);

export default router;