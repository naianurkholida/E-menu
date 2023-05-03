import React from "react";
import './card.scss'

const Card =({tittle, desc, price, img, onClick})=>{
    return(
        <div className="card" onClick={onClick}>
            <img src={img} alt="" />
            <div className="tittle">{tittle}</div>
            <div className="desc">{desc}</div>
            <div className="price">Rp. {price}</div>
        </div>
    )
};
export default Card;