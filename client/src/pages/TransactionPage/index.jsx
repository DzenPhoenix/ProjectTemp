import React from 'react';
import PropTypes from 'prop-types';
import TransactionTable from '../../components/TransactionTable';
import Header from '../../components/Header';
import CONSTANTS from '../../constants';
import { Link } from 'react-router-dom';
import styles from './TransactionPage.module.sass';

const TransactionPage = props => {
    return (
        <div>
            <Header />
            <div>
                {
                    data ? <TransactionTable data={data} /> : <div>No transactions</div>
                }
            </div>
            <Link to='/dashboard'>Back to dashboard</Link>
        </div>
    )
}

TransactionPage.PropTypes = {};

export default TransactionPage;