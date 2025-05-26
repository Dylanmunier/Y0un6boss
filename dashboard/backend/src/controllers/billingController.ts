import { Request, Response } from 'express';
import Invoice from '../models/Invoice';
import { createInvoice, getInvoices } from '../services/stripeService';

export const getInvoiceList = async (req: Request, res: Response) => {
    try {
        const invoices = await getInvoices(req.user.id);
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching invoices', error });
    }
};

export const createNewInvoice = async (req: Request, res: Response) => {
    const { amount, description } = req.body;

    try {
        const invoice = await createInvoice(req.user.id, amount, description);
        res.status(201).json(invoice);
    } catch (error) {
        res.status(500).json({ message: 'Error creating invoice', error });
    }
};

export const updateInvoiceStatus = async (req: Request, res: Response) => {
    const { invoiceId, status } = req.body;

    try {
        const invoice = await Invoice.findById(invoiceId);
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }

        invoice.status = status;
        await invoice.save();
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({ message: 'Error updating invoice status', error });
    }
};