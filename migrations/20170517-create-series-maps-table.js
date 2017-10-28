"use strict";

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface
            .createTable('BooksSeries', {
                bookId: {type: Sequelize.INTEGER, unique: true},
                seriesId: Sequelize.INTEGER
            }, {
                timestamps: false
            });
    },

    down: function (queryInterface) {
        return queryInterface
            .dropTable('BooksSeries');
    }
};