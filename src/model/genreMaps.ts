import db from './index';
import Genres from './genres';
import Books from './books';

const GenreMaps = db.sequelize.define('GenreMaps', {
    id: { type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    bookId: db.Sequelize.INTEGER,
    genreId: db.Sequelize.INTEGER
}, {
    timestamps: false
});

export default GenreMaps;