import db from './db';
import * as Sequelize from 'sequelize';
import BooksSeries from "./booksSeries";
import Genres from "./genres";

const Book: Sequelize.model = db.define('Book', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING },
    chapter: { type: Sequelize.STRING },
    episode: { type: Sequelize.STRING }
});

const SeriesMap: Sequelize.model = db.define('SeriesMap', {
    bookId: { type: Sequelize.INTEGER, unique: true },
    bookSeriesId: Sequelize.INTEGER
}, { timestamps: false });

const GenresMap: Sequelize.model = db.define('GenresMap', {
    bookId: Sequelize.INTEGER,
    genreId: Sequelize.INTEGER
}, { timestamps: false });

Book.belongsToMany(BooksSeries, { through: 'SeriesMap', foreignKey: 'bookId' });
BooksSeries.belongsToMany(Book, { through: 'SeriesMap', foreignKey: 'bookSeriesId' });
Book.belongsToMany(Genres, { through: 'GenresMap', foreignKey: 'bookId' });
Genres.belongsToMany(Book, { through: 'GenresMap', foreignKey: 'genreId' });

export default Book;
