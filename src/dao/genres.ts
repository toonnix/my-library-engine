import Genres from '../model/genres';
import Books from '../model/book';

const findById = (id) => {
    return Genres.findById(id, { include: [Books] }).then(book => {
        return book;
    });
}

const findAll = () => {
    return Genres.findAll({ include: [Books] }).then(bookList => {
        return bookList;
    });
}

const addGenre = (title) => {
    return Genres.create({
        title: title
    }).then(genre => {
        return genre;
    });
}

const GenresDto = {
    findById,
    findAll,
    addGenre
}

export default GenresDto;