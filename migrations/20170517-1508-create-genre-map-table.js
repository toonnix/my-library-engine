"use strict";

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface
            .createTable('GenreMaps', {
                id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
                bookId: Sequelize.INTEGER,
                genreId: Sequelize.INTEGER
            }, {
                timestamps: false
            });
    },

    down: function (queryInterface) {
        return queryInterface
            .dropTable('GenreMap');
    }
};