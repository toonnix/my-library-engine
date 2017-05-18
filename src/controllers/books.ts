import { Request, Response } from 'express'
import BooksDao from '../dao/books'
import BooksSeriesDao from '../dao/booksSeries';
import Books from '../model/books';

const findAll = (req: Request, res: Response) => {
    return BooksDao
        .findAll()
        .then(appusers => res.status(200).json(appusers));
}

const addBook = (req: Request, res: Response) => {
    BooksSeriesDao
        .findOrCreate(req.body.seriesTitle)
        .then(bookSeriesId => {
            const options = req.body;
            options.bookSeriesId = bookSeriesId;
            return Books.create(options)
                .then(function (book: any) {
                    return book.addGenre([2, 3, 4])
                        .then(() => {
                            res.status(200).json(book);
                        });
                });
        });
}

const BooksController = {
    findAll,
    addBook
}

export default BooksController;
