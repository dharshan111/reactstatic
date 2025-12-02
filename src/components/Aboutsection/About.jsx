import React from 'react'
import './About.css'
const About = () => {
  return <>
    <section className='about-wrapper flexCenterStart' id='testimonial'> 
        <div className='about-container innerWidth paddings'>
            <div className='about-header flexColStart'>
                <span className='primaryText'>See our client's</span>
                
            </div>
            <div className='about-flex'>
                <div className='about-image-container'>
                    <img src="./img5.jpg" alt="" />
                </div>
                <div className='about-feed-back paddings'>
                    <ul className='gap'>
                        <li className='value-li'>
                            <span className='secondaryText-about'>The quality of this product exceeded all my expectations.</span>
                        </li>

                        <li className='value-li'> 
                            <span className='secondaryText-about'>Amazing experience! The design, performance are all top-notch.</span>
                        </li>
                        
                        <li className='value-li'> 
                            <span className='secondaryText-about'>I have been using this for a while now, and it still works perfectly.</span>
                        </li>
                        <li className='value-li'> 
                            <span className='secondaryText-about'>The customer support was fantastic, and the product arrived good.</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className='about-flex-2'>
                <div className='about-image-container'>
                    <img src="./img6.jpg" alt="" />
                </div>
                <div className='about-feed-back-2 paddings'>
                    <ul className='gap'>
                        <li className='value-li'>
                            <span className='secondaryText-about'>The quality of this product exceeded all my expectations.</span>
                        </li>

                        <li className='value-li'> 
                            <span className='secondaryText-about'>Amazing experience! The design, performance are all top-notch.</span>
                        </li>
                        
                        <li className='value-li'> 
                            <span className='secondaryText-about'>I have been using this for a while now, and it still works perfectly.</span>
                        </li>
                        <li className='value-li'> 
                            <span className='secondaryText-about'>The customer support was fantastic, and the product arrived good.</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </section>
  </>
}

export default About