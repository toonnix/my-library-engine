import db from './index';
import Books from './genres';
import GenreMaps from './genreMaps';

const Genres = db.sequelize.define('Genres', {
    id: { type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: db.Sequelize.STRING, unique: true },
    description: db.Sequelize.STRING
}, {
    timestamps: false
});

export default Genres;