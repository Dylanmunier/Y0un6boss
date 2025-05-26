import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
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
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(securityHeaders);

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/deliverables', deliverableRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/models', modelRoutes);
app.use('/api/apis', apiRoutes);
app.use('/api/admin', adminRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});