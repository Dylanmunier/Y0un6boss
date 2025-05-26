import { Router } from 'express';
import {
  createDeliverable,
  getDeliverables,
  updateDeliverable,
  deleteDeliverable,
} from '../controllers/deliverableController';

const router = Router();

// Route to create a new deliverable
router.post('/', createDeliverable);

// Route to get all deliverables
router.get('/', getDeliverables);

// Route to update a specific deliverable by ID
router.put('/:id', updateDeliverable);

// Route to delete a specific deliverable by ID
router.delete('/:id', deleteDeliverable);

export default router;