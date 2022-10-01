import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from '../styles/NotFound.module.css';
//svg
import notfound from '../Assets/notfound.svg'

const NotFound = () => {
    return (
        <Container>
            <div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                    <Typography variant='h2' fontFamily={'Montserrat'}>
                        404
                    </Typography>
                    <Typography variant='h4' sx={{ fontSize: { xs: '15px', sm: '23px' } }} fontFamily={'Montserrat'}>
                        Ooops!
                    </Typography>
                    <Typography variant='h4' sx={{ fontSize: { xs: '15px', sm: '23px' } }} fontFamily={'Montserrat'}>
                        Page Not Found
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: { xs: '12px', sm: '20px' } }} color={"#4e4b4b"} fontFamily={'Montserrat'}>
                        This page does'nt' exist or was removed!
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: { xs: '12px', sm: '20px' } }} color={"#4e4b4b"} fontFamily={'Montserrat'}>
                        We suggest You back to home
                    </Typography>
                    <Link to='/'>
                        <Button sx={{ mt: 3 }} variant='contained'>Back To Home</Button>
                    </Link>
                </div>
                <div className={styles.svgContainer}>
                    <img src={notfound} className={styles.notfoundSvg} alt="notfound" />
                </div>
            </div>
            
        </Container>
    );
};

export default NotFound;