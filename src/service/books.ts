import {Router} from 'express';
import Book from '../model/book'
import BooksSeries from "../model/booksSeries";

const router = Router();

const getBookById = (req, res) => {
    return Book.find({where: {id: req.params.id}, include: [BooksSeries]}).then(book => {
        res.json(book);
    });
};

const getBooksList = (req, res) => {
    return Book.findAll({include: [BooksSeries]}).then(bookList => {
        console.log(bookList);
        res.json(bookList);
    });
};

const addBook = (req, res) => {
    return BooksSeries
        .getIdFromTitleOrCreate(req.body.seriesTitle)
        .then(bookSeriesId => {
            console.log(bookSeriesId);
                Book.create({
                        title: "Pretch phra Uma",
                        chapter: 'Prai mahakarn',
                        episode: bookSeriesId,
                        BooksSeries: [{bookSeriesId: 100}]
                    }, {
                        include: [BooksSeries]
                    }
                ).then(function (book) {
                    res.status(200).json(book);
                });
            }
        );
};

router.get('/books', getBooksList);
router.post('/books', addBook);
router.get('/books/:id', getBookById);

module.exports = router;
