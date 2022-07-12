import React from 'react'
import './style.css'

const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3px' }}>
            <div style={{ animation: "spin 1s linear infinite", borderRadius: "9999px", height: "8rem", width: "8rem", borderBottomWidth: "2px", borderColor: "rgb(185 28 28)" }} />
        </div>
    );
}

export default Loader;