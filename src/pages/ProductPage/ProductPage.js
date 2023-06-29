import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import {FaHeart} from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { fetchOneProduct } from '../../http/productApi'

const ProductPage = () => {
  const [product, setProduct] = useState({info: []})
  const {id} = useParams()
  console.log(id)
  useEffect(() => {
    fetchOneProduct(id).then(data => setProduct(data))
  }, [])

  return (
    <div className='productPage_Container'>
      <div className='productPage_header'>
        <div className='productPage_img'><img className='productCard_image' src={'http://localhost:5000/' + product.img} alt="product_img" /></div>
        <div className='productPage_mainInfo'>
        <div className='productPage_name'>{product.name}</div>
          <div className='productPage_price'>{product.price} р/м2</div>          
      <div className='productPage_like'><FaHeart className='pp_icons_like'/></div>
          </div>
      </div>
      <div className='productPage_info'>
        <div className='ppInfo_row'>
          <div className='ppInfo_rowHeader'>Количество штук в упаковке:</div>
          <div>5</div>
        </div>
        <div className='ppInfo_row'>
          <div className='ppInfo_rowHeader'>Количество метров в коробке</div>
          <div>1.44 м2</div>
        </div>
        <div className='ppInfo_row'>
          <div className='ppInfo_rowHeader'>Вес коробки:</div>
          <div>29,7 кг</div>
          </div>
        </div>
      </div>
    
  )
}

export default ProductPage
