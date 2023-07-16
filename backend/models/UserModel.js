import mongoose, { mongo } from "mongoose";
import * as argon2 from "argon2";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await argon2.hash(this.password);
});

userSchema.methods.matchPasswords = async function (enteredPassword) {
    return await argon2.verify(this.password, enteredPassword);
};

const User = mongoose.model('User', userSchema);

export default User;