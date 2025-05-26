import { Router } from 'express';
import { 
    createModel, 
    getModels, 
    updateModel, 
    deleteModel 
} from '../controllers/modelController';

const router = Router();

// Route to create a new model
router.post('/', createModel);

// Route to get all models
router.get('/', getModels);

// Route to update a specific model by ID
router.put('/:id', updateModel);

// Route to delete a specific model by ID
router.delete('/:id', deleteModel);

export default router;