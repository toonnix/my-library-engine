"use strict";

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface
            .createTable('Books', {
                id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
                title: Sequelize.STRING,
                chapter: Sequelize.STRING,
                episode: Sequelize.STRING,
                bookSeriesId: Sequelize.INTEGER,
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE
            });
    },

    down: function (queryInterface) {
        return queryInterface
            .dropTable('Books');
    }
};