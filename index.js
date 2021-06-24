const express = require('express');

const userRouter = require('./routers/userRouter');

const app = express();
app.use(express.json());
app.use('/pf', userRouter);

const PORT = 3000;

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));