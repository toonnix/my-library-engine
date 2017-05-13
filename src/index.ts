import * as express from 'express';

const app = express();

// See the README about ordering of middleware
// Load the routes ("controllers" -ish)
// app.use(require('app/site/router'));
app.use('/api', require('./model/books'));
// app.use('/api', require('app/users/router'));
// Repeat the above line for additional model areas ("deals", "vehicles", etc)

// FINALLY, use any error handlers
// app.use(require('app/errors/not-found'));

// Export the app instance for unit testing via supertest
export default app;