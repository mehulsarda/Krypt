import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext';
import { Loader } from ".";
import './style.css';
import { shortenAddress } from '../utils/shortenAddress'

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
    />
);

const Welcome = () => {
    const { connectWallet, currentAccount, formData, handleChange, sendTransaction, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) {
            return;
        }

        sendTransaction();

    }

    return (
        <div className='wel'>
            <div className='welcome'>
                <h2> Send Crypto <br /> across the world</h2>
                <div>
                    {!currentAccount && (
                        <button
                            type="button"
                            className="connectWalletButton"
                            onClick={connectWallet}
                        >Connect Wallet</button>
                    )}
                </div>
                <div>
                    <h2 id='address'>My Current Address {shortenAddress(currentAccount)}</h2>
                </div>
            </div>
            <form className='form'>
                <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
                <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
                <br />

                {isLoading ? (
                    <Loader />
                ) : (
                    <button
                        type="button"
                        className="connectWalletButton"
                        onClick={handleSubmit}
                    >Send Now</button>
                )}

            </form>
        </div>
    );
}

export default Welcome;