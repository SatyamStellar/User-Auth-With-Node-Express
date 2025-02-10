import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env.js';

if (!DB_URI) {
    throw new Error("Define DB_URI in .env.<development/production>.local file")
}

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log(`Database connected successfully in ${NODE_ENV} mode`);
    } catch (error) {
        console.log("error connecting database", error);
        process.exit(1);
    }
}


export default connectDB;
