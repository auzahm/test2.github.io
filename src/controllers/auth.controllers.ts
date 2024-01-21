import { Request, Response } from 'express';
import authServices from '../services/auth.services.js';
export const authControllers = {

    //signup controller
    signup: async (req: Request, res: Response) => {
        const userData = req.body;
        try {
            const user = await authServices.createUser(userData);
            res.status(201).json({
                message: 'signup',
                user
            });
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    },
    // login controller
    login: (req: Request, res: Response) => {
        res.json({
            message: 'login'
        });
    },
    

};

export default authControllers;
