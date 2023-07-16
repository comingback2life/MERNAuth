import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET;
export const generateToken = (res, userId) => {
    const thirtyDaysInMills = 30 * 24 * 60 * 60 * 1000;
    const token = jwt.sign({ userId }, secret, {
        expiresIn: '30d'
    });
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: thirtyDaysInMills
    });
};
