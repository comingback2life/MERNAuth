import express from 'express';
const PORT = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res, next) => {
    res.send('Server is alive');
});
app.listen(PORT, () => {
    console.log('Listening on PORT', PORT);
});