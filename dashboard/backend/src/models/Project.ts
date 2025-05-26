import { Schema, model, Document } from 'mongoose';

interface IProject extends Document {
    name: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    deliverables: string[];
    billingInfo: {
        totalAmount: number;
        paidAmount: number;
        dueDate: Date;
    };
    createdAt: Date;
    updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending',
    },
    deliverables: {
        type: [String],
        default: [],
    },
    billingInfo: {
        totalAmount: {
            type: Number,
            required: true,
        },
        paidAmount: {
            type: Number,
            default: 0,
        },
        dueDate: {
            type: Date,
            required: true,
        },
    },
}, {
    timestamps: true,
});

const Project = model<IProject>('Project', ProjectSchema);

export default Project;