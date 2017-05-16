import db from './db';

const BooksSeries = db.sequelize.define('BooksSeries', {
    id: {type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: db.Sequelize.STRING, unique: true}
});

this.findOrCreate = (title) => {
    return BooksSeries.findOrCreate({
        where: {
            title: title
        }
    }).spread(bookSeries => {
        return bookSeries.get({plain: true});
    });
};

export default this;