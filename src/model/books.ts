import db from './index';
import BooksSeries from './booksSeries';
import Genres from '../model/genres';
import GenreMaps from './genreMaps';

const Books = db.sequelize.define('Books', {
    id: { type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: db.Sequelize.STRING,
    chapter: db.Sequelize.STRING,
    episode: db.Sequelize.STRING,
    bookSeriesId: db.Sequelize.INTEGER
});

Books.belongsTo(BooksSeries, { foreignKey: 'bookSeriesId' });
BooksSeries.hasMany(Books, { foreignKey: 'bookSeriesId' });

Books.belongsToMany(Genres, { through: GenreMaps, foreignKey: 'bookId' });
Genres.belongsToMany(Books, { through: GenreMaps, foreignKey: 'genreId' });

export default Books;