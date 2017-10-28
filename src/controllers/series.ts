import { Request, Response } from 'express'
import SeriesDao from '../dao/series'

const findAll = (req: Request, res: Response) => {
    return SeriesDao
        .findAll()
        .then(seriesList => res.status(200).json(seriesList));
}

const findById = (req: Request, res: Response) => {
    return SeriesDao
        .findById(req.params.id)
        .then(series => res.status(200).json(series));
}

const create = (req: Request, res: Response) => {
    return SeriesDao
        .findOrCreate(req.body.seriesTitle)
        .then(series => res.status(200).json(series));
}

const SeriesController = {
    findAll,
    findById,
    create
}

export default SeriesController;