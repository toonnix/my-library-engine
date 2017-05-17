import { Request, Response } from 'express'
import BooksSeriesDao from '../dao/booksSeries'

const findAll = (req: Request, res: Response) => {
    return BooksSeriesDao
        .findAll()
        .then(seriesList => res.status(200).json(seriesList));
}

const BooksSeriesController = {
    findAll
}

export default BooksSeriesController;