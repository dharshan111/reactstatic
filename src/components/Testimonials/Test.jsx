import React from 'react'
import './Test.css'
const Test = () => {
  return <>
    <section className='Testimonials-wrapper' id='about'>
        <div className='Testimonials-container paddings innerWidth flexCenterStart'>
            <div className='Testimonial-head flexCenterStart'>
                <h2 className="primaryText">About Us</h2>
            </div>
            <div className='Testimonials-content-flex'>
                <div className='Testimonials-contents'>
                    <div className='product-image-container paddings'>
                        <img src="./img2.jpg" alt="" />
                    </div>
                </div>
                <div className='Testimonials-right-side flexColStart paddings'>
                    <h4 style={{fontSize:"24px"}}>About us</h4>
                    <p className='flexColStart'>
                    <span>We offer the latest Technologies in audio and provide a wide range of </span>
                    <span>products to meet the needs of every customer</span>
                    </p>
                    <div className='Testimonials-three-content'>
                        <div className='three-div'>
                            <p className='three-div-main flexColStart'>
                                <span className='two-letters'>12Y</span>
                                <span className='words'>Experience</span>
                            </p>
                        </div>
                        <div className='three-div'>
                            <p className='three-div-main flexColStart'>
                                <span className='two-letters'>4K</span>
                                <span className='words'>Products</span>
                            </p>
                        </div>
                        <div className='three-div'>
                            <p className='three-div-main flexColStart'>
                                <span className='two-letters'>40K</span>
                                <span className='words'>Happy clients</span>
                            </p>
                        </div>

                    </div>

                </div>
            </div>
            
        </div>
    </section>
  </>
}

export default Test