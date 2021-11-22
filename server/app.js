const express = require('express');
const session = require('express-session');

const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');

const config = require('./config.json');
const cors = require('cors');

const PORT = process.env.PORT || config.PORT;

const server = express();

server.use(cors());
server.use(express.json());
server.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: false,
    saveUninitialized: true
}));
server.use('/api', userRouter);
server.use('/auth', authRouter);

server.listen(PORT, () => {
    console.log(`Server running on ${PORT} PORT`);
});