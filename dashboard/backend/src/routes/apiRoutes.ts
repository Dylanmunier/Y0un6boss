import { Router } from 'express';
import { getAPIs, createAPI, updateAPI, deleteAPI } from '../controllers/apiController';

const router = Router();

// Route to get all APIs
router.get('/', getAPIs);

// Route to create a new API
router.post('/', createAPI);

// Route to update an existing API
router.put('/:id', updateAPI);

// Route to delete an API
router.delete('/:id', deleteAPI);

export default router;