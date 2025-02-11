import { Router } from 'express';
import { singIn, singOut, singUp } from '../controlles/auth.controller.js';

const authRouter = Router();

authRouter.post('/sign-up', singUp)
authRouter.post('/sign-in', singIn)
authRouter.post('/sign-out', singOut)


export default authRouter;
