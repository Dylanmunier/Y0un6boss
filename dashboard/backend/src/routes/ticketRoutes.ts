import { Router } from 'express';
import { createTicket, getTickets, updateTicket, deleteTicket } from '../controllers/ticketController';

const router = Router();

// Route to create a new ticket
router.post('/', createTicket);

// Route to get all tickets
router.get('/', getTickets);

// Route to update a ticket by ID
router.put('/:id', updateTicket);

// Route to delete a ticket by ID
router.delete('/:id', deleteTicket);

export default router;