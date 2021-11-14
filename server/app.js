const express = require('express');
const userRouter = require('./routes/user.route');
const config = require('./config.json');

const PORT = process.env.PORT || config.PORT;

const server = express();

server.use(express.json());
server.use('/api', userRouter);

server.listen(PORT, () => {
    console.log(`Server running on ${PORT} PORT`);
});