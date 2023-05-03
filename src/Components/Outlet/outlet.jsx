import React from "react";
import './outlet.scss';

const Outlet=({desc})=>{
    return(
        <div className="outlet">
            <h3>Outlet sedang tutup</h3>
            <div className="desc">{desc}</div>
        </div>
    )
}

export default Outlet;