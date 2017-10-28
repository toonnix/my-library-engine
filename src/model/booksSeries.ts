import db from './db';
import * as Sequelize from 'sequelize'

const BooksSeries: Sequelize.model = db.define('BooksSeries', {
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        title: {type: Sequelize.STRING, unique: true}
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