import React from 'react'
import IMG from './article3'

const art_three = () => {
  return (
    <div>
        <div className='section-title'>КАК ПОСЧИТАТЬ КОЛИЧЕСТВО ПЛИТКИ</div>
      <div className='article_img'>
        <img src={IMG} alt="picture"/>
      </div>
      <div className='article_text'>
     <p>Ремонт часто сталкивает нас со специфическими задачами и технологиями, требует особых знаний и навыков. Нередко приходится пользоваться помощью специалистов, в разы увеличивая бюджет даже несущественной переделки.</p> <br/>

<p>При укладке плитки можно воспользоваться услугами дизайн-студии, плиточников и даже сделать все «под ключ». А можно попытаться разобраться в некоторых аспектах самостоятельно. Советуем начать с малого, однако, не менее важного – узнать, как правильно рассчитать необходимое количество плитки для будущего интерьера. Существует несколько способов укладки плитки, соответственно, и затраты материала на разные варианты будут различными.</p><br/>

<p>Базовый способ укладки: плитка выкладывается точно в ряд, параллельно углам и стенам. С точки зрения экономии материала – это самый оптимальный способ укладки, отходов остаётся очень мало.</p><br/>

<p>Способ расчета: площадь помещения / площадь одной плитки = количество плиток. Количество плиток округляется в большую сторону. Для того, чтобы узнать необходимое количество плитки в метрах квадратных – умножаем количество плиток на площадь одной плитки.</p><br/>

<p>
Пример. Необходимо облицевать пол помещения, длиной 2,6 метра и шириной 2,4 метра, плиткой, размером 40*40 см.
Площадь помещения = 2,6м×2,4м = 6,24м.кв.
Площадь 1 плитки = 40см×40см = 1600 см.кв.= 0,16 м.кв.
Количество плиток = 6,24÷0,16 = 39шт.
Метраж плитки = 39шт × 0,16 м.кв. = 6,24 м.кв.</p><br/>


      </div>
    </div>
  )
}

export default art_three
