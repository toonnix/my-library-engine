const router = require('express').Router();
import db from './db';

const BooksSeries = db.sequelize.define('BooksSeries', {
    id: {type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: db.Sequelize.STRING, unique: true}
});

const Books = db.sequelize.define('Books', {
    id: {type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    title: db.Sequelize.STRING,
    chapter: db.Sequelize.STRING,
    episode: db.Sequelize.STRING,
    bookSeriesId: db.Sequelize.INTEGER
});

function getById(req, res) {
    return Books.findById(req.params.id).then(book => {
        res.json(book);
    });
}

function getAll(req, res) {
    return Books.findAll().then(bookList => {
        console.log(bookList);
        res.json(bookList);
    });
}

function addBook(req, res) {
    return BooksSeries.findOrCreate({
        where: {
            title: req.body.seriesTitle
        }
    }).spread(bookSeries => {
        let bookSeriesId = bookSeries.get({plain: true}).id;
        Books.create({
            title: "Pretch phra Uma",
            chapter: 'Prai mahakarn',
            episode: '2',
            bookSeriesId: bookSeriesId
        }).then(function (book) {
            res.status(200).json(book);
        });
    });
}

router.get('/books', getAll);
router.post('/books', addBook);
router.get('/books/:id', getById);

module.exports = router;
