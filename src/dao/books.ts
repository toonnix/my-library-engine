import Books from '../model/books';
import BooksSeries from '../model/booksSeries';
import BooksSeriesDao from './booksSeries';

const findById = (id) => {
    return Books.findById(id).then(book => {
        return book;
    });
}

const findAll = () => {
    return Books.findAll({ include: [BooksSeries] }).then(bookList => {
        return bookList;
    });
}

const addBook = (title) => {
    return BooksSeriesDao
        .findOrCreate(title)
        .then(bookSeriesId => {
            return Books.create({
                title: "Pretch phra Uma",
                chapter: 'Prai mahakarn',
                episode: '2',
                bookSeriesId: bookSeriesId
            }).then(function (book) {
                return book;
            });
        }
        );
}

const BooksDao = {
    findById,
    findAll,
    addBook
}

export default BooksDao;