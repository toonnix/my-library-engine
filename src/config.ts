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
    host: process.env.DATABASE_URL || 'localhost',
    port: process.env.POSTGRES_PORT || 5432,
    define: {
        freezeTableName: true
    }
};

if (PRODUCTION) {
    config.database = {
        dialect: "postgres",
        database: "dund0u3u59u1v",
        username: "mhifnkruoxymho",
        password: "6a2fc6364e279637a362c51ea08c168de688fb3e1e60e866aa144b26be573e72",
        host: "ec2-54-83-26-65.compute-1.amazonaws.com",
        port: 5432,
        define: {
            freezeTableName: true
        }
    }
    config.express.ip = '0.0.0.0'
}
