import db from './db';
import * as Sequelize from 'sequelize'
import BooksSeries from "./booksSeries";

const Book: Sequelize.model = db.sequelize.define('Book', {
        id: {type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        title: {type: db.Sequelize.STRING},
        chapter: {type: db.Sequelize.STRING},
        episode: {type: db.Sequelize.STRING}
    }
);

const SeriesMap: Sequelize.model = db.sequelize.define('SeriesMap', {
        bookId: {type: Sequelize.INTEGER, unique: true},
        bookSeriesId: Sequelize.INTEGER
    }, {
        timestamps: false
    }
);

Book.belongsToMany(BooksSeries, {through: 'SeriesMap', foreignKey: 'bookId'});
BooksSeries.belongsToMany(Book, {through: 'SeriesMap', foreignKey: 'bookSeriesId'});

export default Book;
