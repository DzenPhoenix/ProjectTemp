"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Transactions', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references:{
                    model:'Users',
                    key:'id',
                }
            },
            typeOperation:{
                type:Sequelize.ENUM('income','expense'),
                allowNull: false,
            },
            sum: {
                allowNull: false,
                type: Sequelize.DECIMAL,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Transactions');
    },
};
