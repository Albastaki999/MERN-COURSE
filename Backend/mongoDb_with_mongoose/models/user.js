import mongoose from "mongoose"
// Step 1: Define Schema (Structure)
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
});

export const User = mongoose.model('Users', userSchema);

