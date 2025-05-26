import { Request, Response } from 'express';
import { CRMClient } from 'some-crm-library'; // Remplacez par la bibliothèque CRM appropriée
import { User } from '../models/User';

const crmClient = new CRMClient({
    apiKey: process.env.CRM_API_KEY, // Assurez-vous que la clé API est stockée dans les variables d'environnement
});

export const createContact = async (req: Request, res: Response) => {
    try {
        const { name, email, phone } = req.body;
        const newContact = await crmClient.createContact({ name, email, phone });
        res.status(201).json(newContact);
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({ message: 'Error creating contact' });
    }
};

export const getContacts = async (req: Request, res: Response) => {
    try {
        const contacts = await crmClient.getContacts();
        res.status(200).json(contacts);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ message: 'Error fetching contacts' });
    }
};

export const updateContact = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedContact = await crmClient.updateContact(id, updates);
        res.status(200).json(updatedContact);
    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({ message: 'Error updating contact' });
    }
};

export const deleteContact = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await crmClient.deleteContact(id);
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(500).json({ message: 'Error deleting contact' });
    }
};