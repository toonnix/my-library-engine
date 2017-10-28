import Series from '../model/series';
import Books from '../model/books';

const findAll = () => {
    return Series.findAll().then(seriesList => {
        return seriesList;
    });
}

const findById = (id) => {
    return Series.find({ where: { id: id }, include: [Books] }).then(series => {
        return series;
    })
}

const findOrCreate = (title) => {
    return Series.findOrCreate({
        where: {
            title: title
        }
    }).spread((series: any, created) => {
        return series;
    });
};

const seriesDao = {
    findAll,
    findById,
    findOrCreate
}

export default seriesDao;