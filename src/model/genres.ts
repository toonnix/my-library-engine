import db from './db';
import * as Sequelize from 'sequelize';

const Genres = db.define('Genres', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING, unique: true },
    description: Sequelize.STRING
}, {
    timestamps: false
});

export default Genres;