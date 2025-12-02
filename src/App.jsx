import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Herosection/Hero'
import About from './components/Aboutsection/About'
import Test from './components/Testimonials/Test'
import Product from './components/Productssection/Product'
import Contact from './components/Contactsection/Contact'

const App = () => {
  return <>
    <Header />
    <Hero />
    <Test />
    <Product />
    <About />
    <Contact />
  </>
}

export default App
