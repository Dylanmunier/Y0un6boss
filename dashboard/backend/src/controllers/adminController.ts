import { Request, Response } from 'express';
import User from '../models/User';
import { logger } from '../utils/logger';

class AdminController {
    // Get all users
    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            logger.error('Error fetching users: ', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // Get user by ID
    async getUserById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            logger.error('Error fetching user: ', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // Create a new user
    async createUser(req: Request, res: Response) {
        const newUser = new User(req.body);
        try {
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } catch (error) {
            logger.error('Error creating user: ', error);
            res.status(400).json({ message: 'Bad request' });
        }
    }

    // Update user by ID
    async updateUser(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(updatedUser);
        } catch (error) {
            logger.error('Error updating user: ', error);
            res.status(400).json({ message: 'Bad request' });
        }
    }

    // Delete user by ID
    async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deletedUser = await User.findByIdAndDelete(id);
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(204).send();
        } catch (error) {
            logger.error('Error deleting user: ', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default new AdminController();