import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from '../styles/NotFound.module.css';
//svg
import notfound from '../Assets/notfound.svg'
import Footer from './Footer';

const NotFound = () => {
    return (
        <Container>
            <div className={styles.mainContainer}>
                <div className={styles.containerr}>
                    <div className={styles.textContainer}>
                        <Typography sx={{ fontSize: { xs: '56px', md: '90px' } }} fontFamily={'Montserrat'}>
                            404
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '15px', sm: '23px', md: '30px', lg: '40px' } }} fontFamily={'Montserrat'}>
                            Ooops!
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '15px', sm: '23px', md: '30px', lg: '40px' } }} fontFamily={'Montserrat'}>
                            Page Not Found
                        </Typography>
                        <Typography variant='h6' sx={{ fontSize: { xs: '12px', sm: '20px', md: '24px', lg: '28px' } }} color={"#4e4b4b"} fontFamily={'Montserrat'}>
                            This page does'nt' exist or was removed!
                        </Typography>
                        <Typography variant='h6' sx={{ fontSize: { xs: '12px', sm: '20px', md: '24px', lg: '28px' } }} color={"#4e4b4b"} fontFamily={'Montserrat'}>
                            We suggest You back to home
                        </Typography>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Button sx={{ mt: 3 }} variant='contained'>Back To Home</Button>
                        </Link>

                    </div>
                    <div className={styles.svgContainer}>
                        <img src={notfound} className={styles.notfoundSvg} alt="notfound" />
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default NotFound;