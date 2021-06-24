const express = require('express');

const userRouter = require('./routers/userRouter');
// const URL = 'https://projetei-backend.herokuapp.com';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
app.use(express.json());
app.use(`/pf`, userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));