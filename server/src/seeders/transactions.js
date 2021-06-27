module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert('Transactions',
            [
                {
                    userId: 4,
                    typeOperation: 'income',
                    sum: 105,
                },
                {
                    userId: 4,
                    typeOperation: 'expense',
                    sum: 70,
                },
                {
                    userId: 4,
                    typeOperation: 'income',
                    sum: 260,
                },
                {
                    userId: 5,
                    typeOperation: 'income',
                    sum: 500,
                },
                                {
                    userId: 5,
                    typeOperation: 'expense',
                    sum: 300,
                },
            ],
            {}
        );
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Transactions', null, {});
    },
};
