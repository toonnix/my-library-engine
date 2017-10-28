import db from './db';
import * as Sequelize from 'sequelize';
import Series from "./series";
import Genres from "./genres";

const Books: Sequelize.model = db.define('Books', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING },
    episodeTitle: { type: Sequelize.STRING },
    episodeNumber: { type: Sequelize.INTEGER },
    seriesId: { type: Sequelize.INTEGER }
});

// const BooksSeries: Sequelize.model = db.define('BooksSeries', {
//     bookId: { type: Sequelize.INTEGER, unique: true },
//     seriesId: Sequelize.INTEGER
// }, { timestamps: false });

const BooksGenres: Sequelize.model = db.define('BooksGenres', {
    bookId: Sequelize.INTEGER,
    genreId: Sequelize.INTEGER
}, { timestamps: false });

Books.belongsTo(Series, { foreignKey: 'seriesId' });
Series.hasMany(Books, { foreignKey: 'seriesId' });
Books.belongsToMany(Genres, { through: 'BooksGenres', foreignKey: 'bookId' });
Genres.belongsToMany(Books, { through: 'BooksGenres', foreignKey: 'genreId' });

db.sync();

export default Books;
