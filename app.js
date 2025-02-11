import express from 'express';
import cookieParser from 'cookie-parser';

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subRouter from './routes/sub.routes.js';

import connectDB from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subs', subRouter);

app.use(errorMiddleware)

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, async () => {
    console.log(`Server is running on port https://localhost${PORT}`);

    await connectDB();
})

export default app;
