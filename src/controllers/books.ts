import { Request, Response } from 'express'
import BooksDao from '../dao/books'
import SeriesDao from '../dao/series';
import Books from '../model/books';

const findAll = (req: Request, res: Response) => {
    return BooksDao
        .findAll()
        .then(book => res.status(200).json(book));
}

const findById = (req: Request, res: Response) => {
    return BooksDao
        .findById(req.params.id)
        .then(book => res.status(200).json(book));
}

const addBook = (req: Request, res: Response) => {
    return Books
        .create(req.body)
        .then(function (book: any) {
            // return book.assignGenres([2, 3, 4])
            //     .then(() => {
            res.status(200).json(book);
            // });
        });
}

const assignToSeries = (req: Request, res: Response) => {
    return Books
        .findById(req.params.id)
        .then(function (book: any) {
            book
                .setSeries(req.body.seriesId)
                .then(function (book: any) {
                    // return book.assignGenres([2, 3, 4])
                    //     .then(() => {
                    res.status(200).json(book);
                    // });
                });
        })

}

const assignGenres = (req: Request, res: Response) => {
    return Books
        .findById(req.params.id)
        .then(function (book: any) {
            book
                .setGenres(req.body.genres)
                .then(function (book: any) {
                    // return book.assignGenres([2, 3, 4])
                    //     .then(() => {
                    res.status(200).json(book);
                    // });
                });
        })

}

const BooksController = {
    findAll,
    findById,
    addBook,
    assignToSeries,
    assignGenres
}

export default BooksController;
