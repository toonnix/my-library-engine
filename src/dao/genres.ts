import Genres from '../model/genres';
import Books from '../model/books';

const findById = (id) => {
    return Genres.findById(id, { include: [Books] }).then(book => {
        return book;
    });
}

const findAll = () => {
    return Genres.findAll().then(bookList => {
        return bookList;
    });
}

const create = (title) => {
    return Genres.create({
        title: title
    }).then(genre => {
        return genre;
    });
}

const GenresDto = {
    findById,
    findAll,
    create
}

export default GenresDto;