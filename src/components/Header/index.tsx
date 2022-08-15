import React from 'react'
import styles from './Header.module.scss'
import { Container } from '@mui/material';
import CitySelect from '../CitySelect';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { Search, AccountCircleOutlined, Menu } from '@mui/icons-material';

const Header = () => {
  return (
    <header className={styles.header}>
        <Container className={styles.container}>
            <Stack spacing={3} direction="row" alignItems={'center'}>
                <a href="#!" className={styles.logo}>GetYouRide</a>
                <CitySelect />
            </Stack>
            <Stack spacing={2} direction="row" alignItems={'center'}>
                <Button variant="text" className={styles.button}>
                    Стать организатором
                </Button>
                <IconButton aria-label="fingerprint" className={styles.avatar}>
                    <img src='/avatar.png' alt='user' />
                </IconButton>
            </Stack>
            <Stack spacing={1} direction="row" alignItems={'center'} className={styles.mob}>
                <IconButton color="inherit" aria-label="search">
                    <Search />
                </IconButton>
                <IconButton color="inherit" aria-label="user">
                    <AccountCircleOutlined />
                </IconButton>
                <IconButton color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
            </Stack>
        </Container>
    </header>
  ) 
}

export default Header