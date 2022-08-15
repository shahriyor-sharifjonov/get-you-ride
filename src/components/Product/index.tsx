import React, { useState } from 'react'
import styles from './Product.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';
import IconButton from '@mui/material/IconButton';
import {FavoriteBorder, Favorite, AccessTime, PersonOutline, Star, Payment, Money} from '@mui/icons-material';
import 'swiper/css'
import 'swiper/css/pagination'
import { Stack } from '@mui/material';

interface Props {
    title: string,
    desc: string,
    images: Array<string>,
    price: string
}

const Product = ({title, desc, images, price}: Props) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.category}>Экскурсионный мототур</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.desc}>{desc}</p>
                <Stack spacing={2} direction="row" alignItems={"center"} className={styles.tags}>
                    <div className={styles.tag}>
                        <AccessTime />
                        3 часа
                    </div>
                    <div className={styles.tag}>
                        <PersonOutline />
                        до 8 чел
                    </div>
                </Stack>
                <p className={styles.author}>Анапа, Железнодорожный вокзал</p>
                <Stack spacing={2} direction="row" alignItems={"flex-end"} justifyContent={"space-between"}>
                    <div className={styles.review}>
                        <Star />
                        4,7 (23)
                    </div>
                    <div className={styles.right}>
                        <p className={styles.price}>за человека <span>{price}</span></p>
                        <Money />
                        <Payment />
                    </div>
                </Stack>
            </div>
            <div className={styles.images}>
                <IconButton aria-label="save to favotite" className={styles.like} onClick={() => setLiked(!liked)}>
                    {liked ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {images.map((el, index) => (
                        <SwiperSlide key={index}>
                            <img src={`/${el}`} alt={title}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Product