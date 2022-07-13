import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress'


import './style.css'

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    return (
        <div className="card">
            <div className="card-items">
                <div style={{ width: '100%', marginBottom: '1.5rem', padding: '0.5rem' }}>
                    <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel='noopener noreferrer'>
                        <p>From: {shortenAddress(addressFrom)}</p>
                    </a>
                    <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel='noopener noreferrer'>
                        <p>To: {shortenAddress(addressTo)}</p>
                    </a>
                    <p>Amount: {amount} ETH</p>
                    {message && (
                        <>
                            <br />
                            <p style={{ textTransform: 'capitalize' }}>Message: {message}</p>
                        </>
                    )}
                    {keyword && (
                        <>
                            <p style={{ textTransform: 'capitalize' }}>Keyword: {keyword}</p>
                        </>
                    )}
                    <div className='timestamp'>
                        <p style={{ fontWeight: '700' }}>{timestamp}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Transactions = () => {

    const { currentAccount, transactions } = useContext(TransactionContext);

    return (
        <div className="transactions gradient-bg-transactions">
            <div className="transact">
                {currentAccount ? (
                    <h3>Latest Transactions</h3>
                ) : (
                    <h3>Connect your account to see the latest transactions</h3>
                )}

                <div className="trans-card">
                    {[transactions.reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))]}
                </div>


            </div>
        </div>
    );
}

export default Transactions;