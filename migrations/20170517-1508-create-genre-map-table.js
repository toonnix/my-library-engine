"use strict";

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface
            .createTable('GenreMaps', {
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