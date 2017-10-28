"use strict";

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Genres', {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            title: { type: Sequelize.STRING, unique: true },
            description: Sequelize.STRING
        }, {
            timestamps: false
        });
    },

    down: function (queryInterface) {
        return queryInterface.dropTable('Genres');
    }
};