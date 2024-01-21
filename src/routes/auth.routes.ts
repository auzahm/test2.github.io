import { Router } from 'express';
import authControllers from '../controllers/auth.controllers.js';

const authRoutes = Router();

authRoutes.post('/signup', authControllers.signup);
// authRoutes.post('/login', authControllers.login);
// authRoutes.post('/logout', authControllers.logout);

export default authRoutes;
