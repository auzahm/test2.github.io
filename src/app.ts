import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';

//config app
const app = express();
app.use(express.json());
dotenv.config();


// routes
app.use('/api/v1/auth', authRoutes);


// fallback route
app.get('/', (req, res) => {
        // 404 route
        res.status(404).json({
                message: 'Route not found'
        });
});

export default app;