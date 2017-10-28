import { Request, Response } from 'express'
import GenresDto from '../dao/genres';

const findAll = (req: Request, res: Response) => {
    return GenresDto
        .findAll()
        .then(genresList => res.status(200).json(genresList));
}

const findById = (req: Request, res: Response) => {
    return GenresDto
        .findById(req.params.id)
        .then(book => res.status(200).json(book));
}

const create = (req: Request, res: Response) => {
    return GenresDto
        .create(req.body.title)
        .then(genre => {
            res.status(200).json(genre);
        });
}

const GenresController = {
    findAll,
    findById,
    create
}

export default GenresController;