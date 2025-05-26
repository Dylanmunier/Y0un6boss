import { Schema, model, Document } from 'mongoose';

interface IModel extends Document {
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const modelSchema = new Schema<IModel>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

modelSchema.pre<IModel>('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const Model = model<IModel>('Model', modelSchema);

export default Model;