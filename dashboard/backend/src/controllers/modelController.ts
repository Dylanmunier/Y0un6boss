import { Request, Response } from 'express';
import Model from '../models/Model';

// Get all models
export const getAllModels = async (req: Request, res: Response) => {
    try {
        const models = await Model.find();
        res.status(200).json(models);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving models', error });
    }
};

// Get a model by ID
export const getModelById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const model = await Model.findById(id);
        if (!model) {
            return res.status(404).json({ message: 'Model not found' });
        }
        res.status(200).json(model);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving model', error });
    }
};

// Create a new model
export const createModel = async (req: Request, res: Response) => {
    const newModel = new Model(req.body);
    try {
        const savedModel = await newModel.save();
        res.status(201).json(savedModel);
    } catch (error) {
        res.status(400).json({ message: 'Error creating model', error });
    }
};

// Update a model by ID
export const updateModel = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedModel = await Model.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedModel) {
            return res.status(404).json({ message: 'Model not found' });
        }
        res.status(200).json(updatedModel);
    } catch (error) {
        res.status(400).json({ message: 'Error updating model', error });
    }
};

// Delete a model by ID
export const deleteModel = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedModel = await Model.findByIdAndDelete(id);
        if (!deletedModel) {
            return res.status(404).json({ message: 'Model not found' });
        }
        res.status(200).json({ message: 'Model deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting model', error });
    }
};