import db from './db';
import * as Sequelize from 'sequelize'

const Series: Sequelize.model = db.define('Series', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING, unique: true }
});

export default Series;