import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import projectRoutes from './routes/projectRoutes';
import billingRoutes from './routes/billingRoutes';
import deliverableRoutes from './routes/deliverableRoutes';
import ticketRoutes from './routes/ticketRoutes';
import modelRoutes from './routes/modelRoutes';
import apiRoutes from './routes/apiRoutes';
import adminRoutes from './routes/adminRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { securityHeaders } from './middlewares/securityHeaders';

const app = express();

// Middleware configuration
app.use(cors());
app.use(bodyParser.json());
app.use(securityHeaders);

// Route configuration
app.use('/api/projects', projectRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/deliverables', deliverableRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/models', modelRoutes);
app.use('/api/apis', apiRoutes);
app.use('/api/admin', adminRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;