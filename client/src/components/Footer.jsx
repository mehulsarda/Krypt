import React from 'react';
import logo from '../../images/logo.png';
import './style.css'

const Footer = () => {
    return (
        <div className='footer gradient-bg-footer'>
            <footer>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={logo} alt="logo" style={{ width: '8rem' }} />
                </div>
                <div style={{ display: 'flex', flex: '1 1 0%', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', marginTop: '1.25rem', width: '100%' }}>
                    <p>Market</p>
                    <p>Exchange</p>
                    <p>Tutorials</p>
                    <p>Wallets</p>
                </div>
            </footer>
            <div style={{ textAlign: 'center', color: 'whitesmoke' }}>
                <p>Come join us</p>
                <p>mehul@krypt.com || &copy; || All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;