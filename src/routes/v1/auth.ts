import { Router } from "express";
import { body } from "express-validator";

// Controllers
import  register  from "@/controllers/v1/auth/register";

// Middlewares
import validationError from "@/middlewares/validationError";

// Models
import User from '@/models/user';

const router = Router();

router.post('/register',
body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isLength({max: 50})
    .withMessage('Email must be less than 50 characters')
    .isEmail()
    .withMessage('Invalid email address')
    .custom( async (value) => {
        const UserExists = await User.exists({ email: value });
        if(UserExists){
            throw new Error('User email or password is invalid');
        }
    } ),
body('Password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('Password must be atleast 8 characters long'),

body('role')
    .optional()
    .isString()
    .withMessage('Role must be a string')
    .isIn(['admin', 'user'])
    .withMessage('Role must be either admin or user'),    
    validationError,
     register)

router.post('/login',
    
)

export default router;