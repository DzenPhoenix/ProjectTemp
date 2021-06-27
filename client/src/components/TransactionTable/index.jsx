import React from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../../constants';

function TransactionTable({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th> ID</th>
                    <th> Income/Expense</th>
                    <th> Sum</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item) => {
                        <tr key={item.id}>
                            <td>id:{item.id}</td>
                            <td>type:{item.typeOperation}</td>
                            <td>sum:{item.sum}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

TransactionTable.propTypes = {
    data: PropTypes.arrayOf(
        propTypes.shape(
            {
                id: PropTypes.number,
                typeOperation: PropTypes.oneOf([CONSTANTS.INCOME, CONSTANTS.EXPENSE]),
                sum: PropTypes.number
            })
    )
}

export default TransactionTable;