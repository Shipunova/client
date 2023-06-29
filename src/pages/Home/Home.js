import React, { useContext } from 'react'
import Banner from '../../components/Banner/Banner'
import './Home.css'
import LOGO1 from './img/Cerranova.png'
import LOGO2 from './img/Cersanit.png'
import LOGO3 from './img/Estima.png'
import LOGO4 from './img/Grasaro.png'
import LOGO5 from './img/Laparet.png'
import { Context } from '../..'
import ProductCard from '../../components/ProductCard/ProductCard'


const Home = () => {
  const {product} = useContext(Context)

  return (
    <div className='home_container'>
      <div className='page_title'><span>Интернет-каталог</span><span>плитки и керамогранита</span> </div>
        <div className='banner_slider'>
            <Banner/>
        </div>
        <div className='brand_line'> 
        <img src={LOGO1} alt="#"/>
        <img src={LOGO2} alt="#"/>
        <img src={LOGO3} alt="#"/>
        <img src={LOGO4} alt="#"/>
        <img src={LOGO5} alt="#"/>
        </div>
        <div className='popular'>
          <h2 className='page_title'>Популярные товары</h2>
          <div className='popular'>
      <div className='popularProducts'>
        {product.products.slice(0, 4).map(product => 
            <ProductCard
            key={product.id} 
            product={product}/>)}

      </div>
    </div></div>
        </div>
  )
}

export default Home
