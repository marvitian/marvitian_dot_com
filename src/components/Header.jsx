import React from 'react';
import '../styles/Header.css';


function Header() {
    return (
        <div className="header">
            <h1>MARVITIAN</h1>
            <button className="buttonBox" onClick={()=>window.location.href = "/"}>Home</button>
        </div>
    );
}

export default Header;