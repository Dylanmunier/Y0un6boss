import { Schema, model, Document } from 'mongoose';

interface IInvoice extends Document {
    clientId: string;
    projectId: string;
    amount: number;
    status: 'pending' | 'paid' | 'overdue';
    issueDate: Date;
    dueDate: Date;
}

const InvoiceSchema = new Schema<IInvoice>({
    clientId: { type: String, required: true },
    projectId: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'paid', 'overdue'], default: 'pending' },
    issueDate: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true },
});

const Invoice = model<IInvoice>('Invoice', InvoiceSchema);

export default Invoice;