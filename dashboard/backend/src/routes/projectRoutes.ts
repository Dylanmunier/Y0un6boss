import { Router } from 'express';
import {
  createProject,
  getProject,
  updateProject,
  deleteProject,
  listProjects,
} from '../controllers/projectController';

const router = Router();

// Route to create a new project
router.post('/', createProject);

// Route to get a specific project by ID
router.get('/:id', getProject);

// Route to update a specific project by ID
router.put('/:id', updateProject);

// Route to delete a specific project by ID
router.delete('/:id', deleteProject);

// Route to list all projects
router.get('/', listProjects);

export default router;