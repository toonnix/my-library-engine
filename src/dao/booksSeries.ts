import BooksSeries from '../model/booksSeries';
import Books from '../model/book';

const findAll = () => {
    return BooksSeries.findAll({ include: [Books] }).then(seriesList => {
        return seriesList;
    });
}

const findOrCreate = (title) => {
    return BooksSeries.findOrCreate({
        where: {
            title: title
        }
    }).spread((bookSeries: any, created) => {
        return bookSeries.get('id');
    });
};

const BooksSeriesDao = {
    findAll,
    findOrCreate
}

export default BooksSeriesDao;