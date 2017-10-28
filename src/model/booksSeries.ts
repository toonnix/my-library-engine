import db from './db';
import * as Sequelize from 'sequelize'

const BooksSeries: Sequelize.model = db.sequelize.define('BooksSeries', {
        id: {type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        title: {type: db.Sequelize.STRING, unique: true}
    }
);

BooksSeries.getIdFromTitleOrCreate = (title) => {
    return BooksSeries.findOrCreate({
        where: {
            title: title
        }
    }).spread(bookSeries => {
        return bookSeries.get({plain: true}).id;
    });
};

export default BooksSeries;