import app from './index';
const config = require('../src/config');

// Use whichever logging system you prefer.
// Doesn't have to be bole, I just wanted something more or less realistic
// const bole = require('bole');

// bole.output({level: 'debug', stream: process.stdout});
// const log = bole('server');

// log.info('server process starting');

// Note that there's not much logic in this file.
// The server should be mostly "glue" code to set things up and
// then start listening

const port: string = process.env.PORT || '5000';

app.listen(parseInt(port), config.express.ip, function (error) {
    if (error) {
        // log.error('Unable to listen for connections', error);
        process.exit(10);
    }
    console.log('express is listening on http://' +
        config.express.ip + ':' + port);
});
