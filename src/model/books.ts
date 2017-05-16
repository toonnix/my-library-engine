import db from './db';
import { Router } from 'express';
import BooksSeries from './booksSeries';

const router = Router();

const Books = db.sequelize.define('Books', {
    id: {type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    title: db.Sequelize.STRING,
    chapter: db.Sequelize.STRING,
    episode: db.Sequelize.STRING,
    bookSeriesId: db.Sequelize.INTEGER
});

this.getById = (req, res) => {
    return Books.findById(req.params.id).then(book => {
        res.json(book);
    });
}

this.getAll = (req, res) => {
    return Books.findAll().then(bookList => {
        console.log(bookList);
        res.json(bookList);
    });
}

this.addBook = (req, res) => {
    return BooksSeries
        .findOrCreate(req.body.seriesTitle)
        .then(bookSeries => {
            Books.create({
                title: "Pretch phra Uma",
                chapter: 'Prai mahakarn',
                episode: '2',
                bookSeriesId: bookSeries.id
            }).then(function (book) {
                res.status(200).json(book);
            });
        }
    );
}

export default this;
