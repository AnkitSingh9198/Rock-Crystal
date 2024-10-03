import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css'
import product from "../images/product2.png";
import Product from './Product';
export default function Cards({cardData}) {
    let name=cardData.name;
    let price=cardData.price;
    let button=cardData.button;
  return (
    <>
    <div className='display'>
        <div class="card" style={{width:"16rem", height:"21rem", borderRadius:"20px",}}>
  <img src={product} class="card-img-top image1" alt="..."/>
  <div className="card-body">
    <h6 className="card-title">{name}</h6>
    <p className="card-text">{price}</p>
    <a href="#" className="btn btn-outline-info">{button}</a>
  </div>
  </div>
  </div>

</>
  )
}
