// import db from './db';
// import * as Sequelize from 'sequelize'
// import BooksSeries from './booksSeries';
// import Book from "./book";
//
// const SeriesMap: Sequelize.model = db.sequelize.define('SeriesMap', {
//         bookId: {type: Sequelize.INTEGER, unique: true},
//         bookSeriesId: Sequelize.INTEGER
//     }, {
//         timestamps: false
//     }
// );
//
// Book.belongsToMany(BooksSeries, {through: 'SeriesMap', foreignKey: 'bookId'});
// BooksSeries.belongsToMany(Book, {through: 'SeriesMap', foreignKey: 'bookSeriesId'});
//
// export default SeriesMap;
