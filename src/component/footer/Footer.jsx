import React from 'react'
import './footer.css'
import diamondImage from '../images/product2.png'

export default function Footer() {
  return (
    <div>
        <section className='footerSection'>
            <div className='footerDiv'>
        <span className='spanprice'>BEST PRICE<br/></span>
        <span className='span2'>Agate Phone Grip<br/></span>
        <span className='span3'>19.50$<br/></span>
        <p className='span4'>These Pop Rock Crystal grip tops can be swapped with<br/> 
            other tops depending on your mood, outfit, nails,<br/>
             phone case, holiday, etc.! Just gently squeeze the sides <br/>
             to remove and swap out with another color or design!</p><br/>
        <a className="btn btn-info btnfooter " href='#'>BUY NOW</a>
        </div>
        <div className='imageDiv'>
        <img className='imageDiv1 rounded-circle' src={diamondImage} alt="" />
        </div>
        </section>
        <div className='footer'></div>
        </div>
  )
}
