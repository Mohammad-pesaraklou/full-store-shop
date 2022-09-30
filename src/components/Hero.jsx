import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import backPic from '../Assets/storePic.jpg'
import styles from '../styles/Hero.module.css'

const Hero = () => {
    return (
        <div className={styles.container}>
            <img src={backPic} className={styles.backGround}/>
            <div className={styles.backText}>
                <Typography variant='h3' gutterBottom color={"darkslategray"} fontFamily={'Montserrat'}>
                    Ask us The Bests
                </Typography>
                <Typography variant='h5' gutterBottom color={"darkslategray"} fontFamily={'Montserrat'}>
                    - we care about your money
                </Typography>
                <Typography variant='h5'  color={"darkslategray"} fontFamily={'Montserrat'}>
                   - online shop
                </Typography>
                <Link className={styles.btnLink} to={'/products'}>
                <Button variant='contained' sx={{mt: 4,fontFamily: 'Montserrat'}}>Go To Products!</Button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;