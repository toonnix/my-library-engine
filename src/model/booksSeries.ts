import db from './index';
import Books from './books';

const BooksSeries = db.sequelize.define('BooksSeries', {
    id: { type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: db.Sequelize.STRING, unique: true }
});

export default BooksSeries;