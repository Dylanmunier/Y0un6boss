import Stripe from 'stripe';
import { Request, Response } from 'express';
import { Invoice } from '../models/Invoice';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
});

// Create a new customer in Stripe
export const createCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await stripe.customers.create({
      email: req.body.email,
      name: req.body.name,
    });
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new payment intent
export const createPaymentIntent = async (req: Request, res: Response) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: req.body.currency,
      payment_method_types: ['card'],
    });
    res.status(201).json(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve an invoice from Stripe
export const retrieveInvoice = async (req: Request, res: Response) => {
  try {
    const invoice = await stripe.invoices.retrieve(req.params.id);
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Finalize an invoice
export const finalizeInvoice = async (req: Request, res: Response) => {
  try {
    const invoice = await stripe.invoices.finalizeInvoice(req.params.id);
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Save invoice details to the database
export const saveInvoice = async (invoiceData: any) => {
  try {
    const invoice = new Invoice(invoiceData);
    await invoice.save();
  } catch (error) {
    console.error('Error saving invoice:', error);
  }
};