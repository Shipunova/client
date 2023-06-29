import React from 'react'
import './Articles.css'
import IMG1 from './article_one/article-1.png'
import IMG2 from './article_two/article-2.png'
import IMG3 from './article_three/article-3.png'
import IMG4 from './article_four/article-4.png'

const Articles = () => {
  return (
    <section className="articles container">
        <h2 className="section-title">Полезные статьи</h2>
        <div className="articles__item">
            <img src={IMG1} width="400" height="300" alt="#"/>
            <div className="item-left">
                <p className="item__text">Правила укладки плитки</p>
                <p className="item__date">15.12.2022</p>
            </div>
        </div>
        <div className="articles__item">
            <img src={IMG2} width="400" height="300" alt="#"/>
            <div className="item-left">
                <p href="" className="item__text">Отличия плитки от керамогранита</p>
                <p className="item__date">06.12.2022</p>
            </div>
        </div>
        <div className="articles__item">
            <img src={IMG3} width="400" height="300" alt="#"/>
            <div className="item-left">
                <p href="" className="item__text">Как посчитать количество плитки</p>
                <p className="item__date">01.12.2022</p>
            </div>
        </div>
        <div className="articles__item">
            <img src={IMG4} width="400" height="300" alt="#"/>
            <div className="item-left">
                <p href="" className="item__text">Что еще нужно для ремонта</p>
                <p className="item__date">21.10.2022</p>
            </div>
        </div>
    </section> 
  )
}

export default Articles
