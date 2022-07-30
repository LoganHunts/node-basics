const http   = require('http');  // previously as  import { createServer } from 'http';
const routes = require('./routes');  // import routes from './routes'; 
const server = http.createServer( routes.handler ); // const server = http.createServer( routes )
server.listen(3000);