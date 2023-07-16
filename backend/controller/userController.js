import expressAsyncHandler from "express-async-handler"; // use async-await without try catch
import User from '../models/UserModel.js';
import { generateToken } from "../utils/generateToken.js";
export const authUser = expressAsyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPasswords(password))) {
        generateToken(res, user._id);
        res.status(200).send({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(401);
        throw new Error('Invalid login details.');
    }

});

export const registerUser = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({
        email
    });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists in the system');
    }
    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        //201 : success -- something has been created
        generateToken(res, user._id);
        res.status(200).send({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data.');
    }
});

export const logOutUser = expressAsyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'Logged out successfully' });
});
export const getUserProfile = expressAsyncHandler(async (req, res) => {
    const { user } = req;
    const response = {
        _id: user?._id,
        name: user?.name,
        email: user?.email
    };
    res.status(200).json({ message: 'Get User Profile', response });
});

export const updateUserProfile = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req?.user?._id);
    const { name, email, password } = req?.body;
    if (user) {
        user.name = name || user.name;
        user.email = email || user.email;
        if (password) {
            user.password = password;
        }
        const updatedUser = await user.save();
        res.status(200).json({
            message: 'success',
            result: {
                _id: updatedUser?._id,
                email: updatedUser?.email,
                name: updatedUser?.name
            }
        });
    } else {
        res.status(404);
        throw new Error('A user does not exist.');
    }

});




