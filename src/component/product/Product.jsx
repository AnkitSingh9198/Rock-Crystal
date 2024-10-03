import React from 'react'
import './product.css'
import wave from "../images/wave.png";
import Cards from './Cards';
export default function Product() {
  
  return (
    <div >
        <section className='product-section'>
<span className='header'>All product</span>

<div className='display'>
<Cards cardData={{name: "CRYSTAL AGRATE PHONE GRIP", price:"18.99$",button:"Buy Now"}} />
<Cards cardData={{name: "CRYSTAL AGRATE PHONE GRIP", price:"18.99$",button:"Buy Now"}} />
<Cards cardData={{name: "CRYSTAL AGRATE PHONE GRIP", price:"18.99$",button:"Buy Now"}} />
<Cards cardData={{name: "CRYSTAL AGRATE PHONE GRIP", price:"18.99$",button:"Buy Now"}} />
</div>
<div className='display'>
<Cards cardData={{name: "CRYSTAL AGRATE PHONE GRIP", price:"18.99$",button:"Buy Now"}} />
<Cards cardData={{name: "CRYSTAL AGRATE PHONE GRIP", price:"18.99$",button:"Buy Now"}} />
<Cards cardData={{name: "CRYSTAL AGRATE PHONE GRIP", price:"18.99$",button:"Buy Now"}} />
<Cards cardData={{name: "CRYSTAL AGRATE PHONE GRIP", price:"18.99$",button:"Buy Now"}} />
</div>
<a className="btn btn-outline-info btnViewAll" href='#'>view all</a>
        </section>
        
    </div>
  )
}
