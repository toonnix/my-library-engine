import Books from '../model/book';
import BooksSeries from '../model/booksSeries';
import Genres from '../model/genres';

const findById = (id) => {
    return Books.findById(id).then(book => {
        return book;
    });
}

const findAll = () => {
    return Books.findAll({ include: [BooksSeries, Genres] }).then(bookList => {
        return bookList;
    });
}

const addBook = (options) => {
    return Books.create(options).then(function (book: any) {
        return book;
    });
}

const BooksDao = {
    findById,
    findAll,
    addBook
}

export default BooksDao;