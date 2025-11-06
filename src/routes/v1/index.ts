import { Router } from "express";
import { version } from "process";
const router = Router();

import authRoutes from '@/routes/v1/auth';
import registerRoutes from '@/routes/v1/auth'

 router.get('/', (req, res) => {
        res
        .status(200) 
        .json({
        message: 'API is live',
        status: 'ok',
        version: '1.0.0.0',
        docs: 'http://docs.blog-api.codewithsadee.com',
        timestamp: new Date().toISOString()
    });
});

router.use('/auth', authRoutes);
router.use('/register', registerRoutes)

export default router;