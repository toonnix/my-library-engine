import db from './index';
import BooksSeries from './booksSeries';

const Books = db.sequelize.define('Books', {
    id: { type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: db.Sequelize.STRING,
    chapter: db.Sequelize.STRING,
    episode: db.Sequelize.STRING,
    bookSeriesId: db.Sequelize.INTEGER
});

Books.belongsTo(BooksSeries, { foreignKey: 'bookSeriesId' });
BooksSeries.hasMany(Books, { foreignKey: 'bookSeriesId' });

export default Books;