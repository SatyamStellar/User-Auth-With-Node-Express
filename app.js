import express from 'express';

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subRouter from './routes/sub.routes.js';

import connectDB from './database/mongodb.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subs', subRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, async () => {
    console.log(`Server is running on port https://localhost${PORT}`);

    await connectDB();
})

export default app;
