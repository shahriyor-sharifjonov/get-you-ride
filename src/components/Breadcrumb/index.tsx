import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Breadcrumb.module.scss'
import { Container } from '@mui/material'
import 'swiper/css'

interface Props {
  items: Array<String>
}

const Breadcrumb = ({ items }: Props) => {
  return (
    <div className={styles.container}>
      <Container>
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          className={styles.swiper}
        >
          {items.map((el, index) => (
            <SwiperSlide className={styles.slide} key={index}>{el}</SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  )
}

export default Breadcrumb