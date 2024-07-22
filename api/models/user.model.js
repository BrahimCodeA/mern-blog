import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2021/10/24/13/29/profile-pic-6738117_1280.png",
    },
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);
export default User;