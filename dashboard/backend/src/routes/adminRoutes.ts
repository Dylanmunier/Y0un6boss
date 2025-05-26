import { Router } from 'express';
import { 
    getAllUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser, 
    getAuditLogs 
} from '../controllers/adminController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Middleware to protect admin routes
router.use(authMiddleware);

// Route to get all users
router.get('/users', getAllUsers);

// Route to get a user by ID
router.get('/users/:id', getUserById);

// Route to create a new user
router.post('/users', createUser);

// Route to update an existing user
router.put('/users/:id', updateUser);

// Route to delete a user
router.delete('/users/:id', deleteUser);

// Route to get audit logs
router.get('/audit-logs', getAuditLogs);

export default router;