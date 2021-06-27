module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transactions', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        typeOperation: {
            type: DataTypes.ENUM('income', 'expense'),
            allowNull: false,
        },
        sum: {
            allowNull: false,
            type: DataTypes.DECIMAL,
        },
    }, {

        timestamps: false,
    });

    Transaction.associate=function(models){
        Transaction.belongsTo(models.Users,{foreignKey:'userId'});
    }

    return Transaction
};
