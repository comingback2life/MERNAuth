import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleWare.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const PORT = process.env.PORT || 3000;
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //for form-data
app.use(cookieParser());
app.use('/api/users', userRoutes);


app.get('/', (req, res, next) => {
    res.send('Server is alive');
});
app.use(notFound);
app.use(errorHandler);
userRoutes;
app.listen(PORT, () => {
    console.log('Listening on PORT', PORT);
});