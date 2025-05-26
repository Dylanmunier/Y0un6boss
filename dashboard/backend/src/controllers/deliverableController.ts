import { Request, Response } from 'express';
import Deliverable from '../models/Deliverable';

// Get all deliverables
export const getDeliverables = async (req: Request, res: Response) => {
    try {
        const deliverables = await Deliverable.find();
        res.status(200).json(deliverables);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching deliverables', error });
    }
};

// Get a single deliverable by ID
export const getDeliverableById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deliverable = await Deliverable.findById(id);
        if (!deliverable) {
            return res.status(404).json({ message: 'Deliverable not found' });
        }
        res.status(200).json(deliverable);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching deliverable', error });
    }
};

// Create a new deliverable
export const createDeliverable = async (req: Request, res: Response) => {
    const newDeliverable = new Deliverable(req.body);
    try {
        const savedDeliverable = await newDeliverable.save();
        res.status(201).json(savedDeliverable);
    } catch (error) {
        res.status(400).json({ message: 'Error creating deliverable', error });
    }
};

// Update an existing deliverable
export const updateDeliverable = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedDeliverable = await Deliverable.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedDeliverable) {
            return res.status(404).json({ message: 'Deliverable not found' });
        }
        res.status(200).json(updatedDeliverable);
    } catch (error) {
        res.status(400).json({ message: 'Error updating deliverable', error });
    }
};

// Delete a deliverable
export const deleteDeliverable = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedDeliverable = await Deliverable.findByIdAndDelete(id);
        if (!deletedDeliverable) {
            return res.status(404).json({ message: 'Deliverable not found' });
        }
        res.status(200).json({ message: 'Deliverable deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting deliverable', error });
    }
};