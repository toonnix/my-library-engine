import Books from '../model/books';
import Series from '../model/series';
import Genres from '../model/genres';

const findById = (id) => {
    return Books.find({ where: { id: id }, include: [Series, Genres] }).then(book => {
        return book;
    });
}

const findAll = () => {
    return Books.findAll().then(bookList => {
        return bookList;
    });
}

const addBook = (options) => {
    return Books.create(options).then(function (book) {
        return book;
    });
}

const setSeries = (id: number) => {
    return Books.setSeries(id).then(book => {
        return book;
    })
}

const setGenres = (genres: Array<any>) => {
    console.log(genres);
    return Books.setGenres(genres).then(book => {
        return book;
    })
}

const BooksDao = {
    findById,
    findAll,
    addBook,
    setSeries
}

export default BooksDao;