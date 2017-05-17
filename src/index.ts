import * as express from 'express';
import * as bodyParser from 'body-parser';
const app = express();

// See the README about ordering of middleware
// Load the routes ("controllers" -ish)
// app.use(require('app/site/router'));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use('/api', require('./routes/books'));
app.use('/api', require('./routes/booksSeries'));
app.use('/api', require('./routes/genres'));
// app.use('/api', require('app/users/router'));
// Repeat the above line for additional model areas ("deals", "vehicles", etc)


// FINALLY, use any error handlers
// app.use(require('app/errors/not-found'));

// Export the app instance for unit testing via supertest
export default app;