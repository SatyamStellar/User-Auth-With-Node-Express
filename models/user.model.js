import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLenght: 3,
        maxLenght: 30,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        toLowerCase: true,
        match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLenght: 6,
    },
}, { timestamps: true })


const User = mongoose.model("User", userSchema);

export default User;
