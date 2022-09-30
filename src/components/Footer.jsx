import { Typography } from '@mui/material';
import React from 'react';
//icons
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
//styles
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                <a href="https://www.instagram.com/_.mhwmd6" className={styles.links} >
                    <FaInstagram fontSize="30px" color='#dc2743' />
                    <Typography color={"#cecece"} variant="subtitle1" fontFamily='Montserrat'>
                        Instagram
                    </Typography>
                </a>
                <a href="https://github.com/Mohammad-pesaraklou" className={styles.links} target="_blank">
                    <FaGithub fontSize="30px" color={"#6c6565"} />
                    <Typography color={"#cecece"} variant="subtitle1" fontFamily='Montserrat'>
                        github
                    </Typography>
                </a>
                <a href="mailto: mhmdpsr6@gmail.com" className={styles.links} >
                    <HiOutlineMail fontSize="30px" color={"#3f9885"} />
                    <Typography color={"#cecece"} variant="subtitle1" fontFamily='Montserrat'>
                        Email
                    </Typography>
                </a>
            </div>
            <div className={styles.copyContainer}>
                <Typography fontFamily='Montserrat'>
                    &copy;
                    This Store Shop Project Created in 9/30/2022
                </Typography>
            </div>
        </div>
    );
};

export default Footer;