import Navbar from '../Navbar/navbar';
import Card from '../Card/card';
import Kategori from '../Kategori/kategori';
import Outlet from '../Outlet/outlet';
import { useState } from 'react';
import Detail from '../Detail-card/detail';
import './main.scss'

const Main = () =>{
  const [show, setShow]= useState(false);
    return (
        <div className="App">
          <div className="nav">
          <Navbar/>
          </div>
          <div className="outlet1">
            <Outlet desc="Outlet akan buka kembali pada pada: senin, 05 Dec 2022, 08:00. Mohon pilih outlet lain yang tersedia."/>
          </div>
    
          <h3 className="font-bold">Kategori</h3>
          <div className="kategori-wrap">
            <Kategori buttonText="Semua"/>
            <Kategori buttonText="Snack"/>
            <Kategori buttonText="Tanpa Kategori"/>
            <Kategori buttonText="Coffee"/>
            <Kategori buttonText="Non Coffee"/>
            <Kategori buttonText="Tea"/>
          </div>
          <h3 className="font-bold">Produk Terlaris</h3>
          <div className='card-wrap' onClick={() => setShow(true)}>
    
            <Card tittle="coffee caramel" desc="topping caramel" price="890.000" img="https://tinyurl.com/2yku48ys"/>
            <Card tittle="coffee" desc="hsgdhsagdaj" price="87.817" img="./kopi.jpg"/>
            <Card tittle="kopi kenangan" desc="kenangan kamu" price="berharga pokonya mah" img="./kopi.jpg"/>
            <Card tittle="coffee" desc="boongan" price="45.000" img="./kopi.jpg"/>
            <Card tittle="coffee" desc="yacch" price="676.762" img="./kopi.jpg"/>
            <Card tittle="air meneral" desc="air nya bening " price="700.000" img="./kopi.jpg"/>
            <Card tittle="coffee" desc="air nya putih" price="265.600" img="./kopi.jpg"/>
            <Card tittle="coffee" desc="susu" price="64.000" img="./kopi.jpg"/>
          </div>
          <Detail title="Kopi Aesthetic" price="890.000" rating="(Belum Ada Rating)" img="https://tinyurl.com/2yku48ys" show={show} setShow={setShow}/>
    
        </div>
      );
}

export default Main;