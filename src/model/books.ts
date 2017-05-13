const router = require('express').Router();
import db from './db';

const Books = db.sequelize.define('books', {
    id: {type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    title: db.Sequelize.STRING,
    chapter: db.Sequelize.STRING,
    episode: db.Sequelize.STRING
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
    return Books.create({
        title: "Pretch phra Uma",
        chapter: 'Prai mahakarn',
        episode: '2'
    }).then(function (book) {
        console.log(book);
        res.status(200).json(book);
    });
}

router.get('/books', getAll);
router.post('/books', addBook);
router.get('/books/:id', getById);

module.exports = router;
