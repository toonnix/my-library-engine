import { Request, Response } from 'express'
import GenresDto from '../dao/genres';

const findAll = (req: Request, res: Response) => {
    return GenresDto
        .findAll()
        .then(genreList => res.status(200).json(genreList));
}

const addGenre = (req: Request, res: Response) => {
    return GenresDto
        .addGenre(req.body.title)
        .then(genre => {
            res.status(200).json(genre);
        });
}

const GenresController = {
    findAll,
    addGenre
}

export default GenresController;