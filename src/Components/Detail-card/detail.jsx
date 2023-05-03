import React from "react";
import './detail.scss';
import Close from '../Icon/Close/Index';

const Detail =({ show, setShow, img, price, desc, title, ulasan, rating})=>{
    return(
        <div className={`detail ${show ?  "d-flex" : "d-none"}`}>
            <div className="all w-fit bg-white rounded-md p-4">
                <div className="head flex justify-between">
                    <div className="flex items-center">
                        <h4 className="detail-product font-bold">Detail Produk</h4>

                    </div>
                    <Close onClick={()=> setShow(false)}/>
                </div>
                <div className="detail-body flex flex-row">
                    <div className="detail-img w-72 h-72">
                        <img src={img} alt="" />
                    </div>
                    <div className="detail flex flex-col text-left gap-2">
                        <h4 className="title font-bold">{title}</h4>
                        <p className="text-gray-400">{rating}</p>
                        <h5 className="price font-bold">Rp. {price}</h5>
                    <div className="detail-ulasan flex">
                        <div className="ulasan">
                        <button className="btn-detail">Detail Product</button>
                        <p className="detail">{desc}</p>
                        </div>
                        <button className="ulasan">Ulasan</button>
                        <p>{ulasan}</p>
                        </div>
                    </div>
                    <div className="opsional">
                        <div className="catatan">
                            <input type="text" name="" id="" />
                        </div>
                        <div className="jumlah"></div>
                        <div className="btn-jumlah">
                            <button className="jumlah">Tambah ke Keranjang | </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detail;