const {Transactions}= require('../../models');
const UserNotFound = require('../../errors/UserNotFoundError.js');

module.exports.getHistoryByUserId = async (userId)=>{
    const result = await Transactions.findAll({
        where:{userId,}
    });
    if(result.length!==0){
        return result;
    }
    else{
        new UserNotFound('No transaction for user');
    }
}
