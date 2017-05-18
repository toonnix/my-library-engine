import db from './index';
import Genres from './genres';
import Books from './books';

const GenreMaps = db.sequelize.define('GenreMaps', {
    bookId: db.Sequelize.INTEGER,
    genreId: db.Sequelize.INTEGER
}, {
    timestamps: false
});

export default GenreMaps;