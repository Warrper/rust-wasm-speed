import express from 'express';
import http from 'http';
import config from './config';

const port = '3001';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// add routers to app
config.routes.forEach((routeName) => {
    const route = require(`./routes/${routeName}`);
    route.default(app);
});

// ping back URL
app.get('/', (req, res) => {
    res.status(200).send({ status: 'OK' });
});

const server = http.createServer(app);
server.listen(port).on('listening', () => {
    console.log(`Running on ${port}`);
});
