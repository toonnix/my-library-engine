"use strict";

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface
            .createTable('Book', {
                id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
                title: Sequelize.STRING,
                chapter: Sequelize.STRING,
                episode: Sequelize.STRING,
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE
            });
    },

    down: function (queryInterface) {
        return queryInterface
            .dropTable('Book');
    }
};