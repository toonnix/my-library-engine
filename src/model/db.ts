import * as Sequelize from 'sequelize'
const config = require('../config');

const sequelize = new Sequelize(config.database);

export default {
    sequelize,
    Sequelize
};
