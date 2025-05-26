import { Request, Response } from 'express';
import Ticket from '../models/Ticket';

// Create a new ticket
export const createTicket = async (req: Request, res: Response) => {
    try {
        const ticketData = req.body;
        const newTicket = new Ticket(ticketData);
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(500).json({ message: 'Error creating ticket', error });
    }
};

// Get all tickets
export const getAllTickets = async (req: Request, res: Response) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tickets', error });
    }
};

// Get a ticket by ID
export const getTicketById = async (req: Request, res: Response) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ticket', error });
    }
};

// Update a ticket
export const updateTicket = async (req: Request, res: Response) => {
    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTicket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.status(200).json(updatedTicket);
    } catch (error) {
        res.status(500).json({ message: 'Error updating ticket', error });
    }
};

// Delete a ticket
export const deleteTicket = async (req: Request, res: Response) => {
    try {
        const deletedTicket = await Ticket.findByIdAndDelete(req.params.id);
        if (!deletedTicket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting ticket', error });
    }
};