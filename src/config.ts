const config = module.exports;
const PRODUCTION: boolean = process.env.NODE_ENV === 'production';

config.express = {
    port: process.env.EXPRESS_PORT || 3100,
    ip: '127.0.0.1'
};

config.database = {
    dialect: 'postgres',
    database: 'mylibrary',
    username: 'librarian',
    password: 'admin',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || 5432,
};

if (PRODUCTION) {
    // for example
    config.express.ip = '0.0.0.0'
}
