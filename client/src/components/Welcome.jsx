import React from 'react'
import './style.css'

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

    const connectWallet = () => {

    }

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <div className='wel'>
            <div className='welcome'>
                <h2> Send Crypto <br /> across the world</h2>
                <div>
                    <button
                        type="button"
                        className="connectWalletButton"
                        onClick={connectWallet}
                    >Connect Wallet</button>
                </div>
            </div>
            <form className='form'>
                <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
                <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
                <br />
                <button
                    type="button"
                    className="connectWalletButton"
                    onClick={handleSubmit}
                >Send Now</button>
            </form>
        </div>
    );
}

export default Welcome;