import * as Sequelize from 'sequelize'
const config = require('../config');

const db = new Sequelize(config.database);

export default db;
