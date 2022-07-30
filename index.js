import { createServer } from 'http';   // previously as const http   = require('http');
import routes from './routes';         // const routes = require('./routes').default;
const server = createServer( routes ); // const server = http.createServer( routes )

server.listen(3000);