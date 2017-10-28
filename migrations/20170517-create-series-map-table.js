"use strict";

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface
            .createTable('SeriesMap', {
                bookId: {type: Sequelize.INTEGER, unique: true},
                bookSeriesId: Sequelize.INTEGER
            }, {
                timestamps: false
            });
    },

    down: function (queryInterface) {
        return queryInterface
            .dropTable('SeriesMap');
    }
};