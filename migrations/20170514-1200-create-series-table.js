"use strict";

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface
            .createTable('Series', {
                id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
                title: {type: Sequelize.STRING, unique: true},
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE
            });
    },

    down: function (queryInterface) {
        return queryInterface
            .dropTable('Series');
    }
};