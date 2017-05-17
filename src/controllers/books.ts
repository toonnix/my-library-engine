import { Request, Response } from 'express'
import BooksDao from '../dao/books'

const findAll = (req: Request, res: Response) => {
    return BooksDao
        .findAll()
        .then(appusers => res.status(200).json(appusers));
}

const addBook = (req: Request, res: Response) => {
    return BooksDao
        .addBook(req.body)
        .then(book => {
            res.status(200).json(book);
        });
}

const BooksController = {
    findAll,
    addBook
}

export default BooksController;