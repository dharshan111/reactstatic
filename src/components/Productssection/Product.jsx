import React from 'react'
import './Product.css'
// import { FaShieldAlt } from "react-icons/fa";
// import { FaVoicemail } from 'react-icons/fa';
// import { FaFacebookMessenger } from 'react-icons/fa';
// import { FaProductHunt } from 'react-icons/fa';
const Product = () => {
  return <>
    <section className='product-wrapper' id='products'>
        <div className='product-container paddings innerWidth'>
            <div className='product-content'>
                <div className='product-headings paddings' >
                    <p className='product-headings-second'>Products & Key Features</p>
                </div>

                <div className='product-double-side paddings flexCenter'>
                    <div className='product-right-side'>
                        <img src="./img4.jpg" alt="" />
                    </div>
                    <div className='product-left-side-content'>
                        <div className='product-left'>
                            <div className='left-content'>
                                <p className='flexColStart another-hover-product'>
                                    <span className='heading-product'>Premium Products</span>
                                    <span>Quality and simplicity for timeless music experiences</span>
                                </p>
                            </div>
                            <div className='left-content another-hover-product'>
                                <p className='flexColStart'>
                                    <span className='heading-product'>Privacy you can trust</span>
                                    <span>Your voice data secure designed with privacy all its core</span>
                                </p>
                            </div>
                            <div className='left-content another-hover-product'>
                                <p className='flexColStart'>
                                    <span className='heading-product'>Voice Control</span>
                                    <span>Voice control lets you manage everything hands free</span>
                                </p>
                            </div>
                            <div className='left-content another-hover-product'>
                                <p className='flexColStart'>
                                    <span className='heading-product'>Sends & read message</span>
                                    <span>Sends voice message directly through integrated messengers</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
}

export default Product