const express = require('express');

const userRouter = require('./routers/userRouter');
const URL = https://projetei-backend.herokuapp.com;

const app = express();
app.use(express.json());
app.use(`${URL}/pf`, userRouter);

const PORT = 3000;

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));