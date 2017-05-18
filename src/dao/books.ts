import Books from '../model/books';
import BooksSeries from '../model/booksSeries';
import BooksSeriesDao from './booksSeries';
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
    return BooksSeriesDao
        .findOrCreate(options.seriesTitle)
        .then(bookSeriesId => {
            options.bookSeriesId = bookSeriesId;
            return Books.create(options)
                .then(function (book: any) {
                    return book.addGenre([2, 3, 4])
                        .then(() => {
                            return book;
                        });
                });
        });
}

const BooksDao = {
    findById,
    findAll,
    addBook
}

export default BooksDao;