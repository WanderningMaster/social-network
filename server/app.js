const express = require('express');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');

const config = require('./config.json');

const PORT = process.env.PORT || config.PORT;

const server = express();

server.use(cors({ 
  origin: true, 
  credentials: true,
}));
server.use(express.json());
server.use(cookieParser('Secret'));


server.use('/api', userRouter);
server.use('/auth', authRouter);

server.listen(PORT, () => {
  console.log(`Server running on ${PORT} PORT`);
});
