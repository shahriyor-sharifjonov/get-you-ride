import { Container } from '@mui/material'
import styles from './Products.module.scss'
import React from 'react'
import Product from '../Product'

const Products = () => {
  const title1 = "Эндуро тур к большому Утришу с професиональной фотосъемкой"
  const title2 = "Автокемпинг \"Сказочный лес\""
  const desc1 = "В 10 утра выезжаем от 800 ступений в городе Анапа, по дороге посещаем дикую бухту большого Утриша, где вас будет ждать професиональная фотосьемка с мотоциклами..."
  const desc2 = "Автокемпинг \"Сказочный лес\" предоставляет: стоянку для автомобилей, аренду беседок, бассейн, шезлонги, гамаки, конные прогулки и многое другое. Размещение автомобил..."

  return (
    <Container>
        <p className={styles.title}>Активностей: 2</p>
        <Product title={title1} desc={desc1} images={['product-1.png', 'product-1.png', 'product-1.png', 'product-1.png']} price="2 500 ₽"/>
        <Product title={title2} desc={desc2} images={['product-2.png', 'product-2.png', 'product-2.png', 'product-2.png']} price="1 000 ₽"/>
    </Container>
  )
}

export default Products