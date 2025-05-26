import { Schema, model, Document } from 'mongoose';

interface ITicket extends Document {
    title: string;
    description: string;
    status: 'open' | 'in-progress' | 'closed';
    createdAt: Date;
    updatedAt: Date;
    assignedTo?: string; // User ID of the person assigned to the ticket
}

const TicketSchema = new Schema<ITicket>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['open', 'in-progress', 'closed'],
        default: 'open',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    assignedTo: {
        type: String,
        required: false,
    },
});

TicketSchema.pre<ITicket>('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const Ticket = model<ITicket>('Ticket', TicketSchema);

export default Ticket;