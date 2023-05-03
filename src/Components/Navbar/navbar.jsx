import React from "react";
import './navbar.scss';


const Navbar =()=>{
    return(
    <div className="header">
        <div className="logo">
            <div className="icon-logo"></div>
            <div className="text-logo"> kopi</div>  
        </div>
        <div className="nav">
            <a href=""><li>Beranda</li></a>
            <a href=""><li>Produk</li></a>
            <a href=""><li>Promo</li></a>
            <a href=""><li>Tentang Kami</li></a>
            <a href=""><li>Hubungi Kami</li></a>
        </div>
        <div className="icon"></div>
    </div>


    )
    
};
export default Navbar;