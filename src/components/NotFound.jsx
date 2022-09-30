import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className={styles.textContainer}>
                <Typography variant='h2' fontFamily={'Montserrat'}>
                    404
                </Typography>
                <Typography variant='h4' fontFamily={'Montserrat'}>
                    Ooops!
                </Typography>
                <Typography variant='h4' fontFamily={'Montserrat'}>
                    Page Not Found
                </Typography>
                <Typography variant='h6' fontFamily={'Montserrat'}>
                    This page does'nt' exist or was removed!
                </Typography>
                <Typography variant='h6' fontFamily={'Montserrat'}>
                    We suggest You back to home
                </Typography>
                <Link to='/'>
                    <Button sx={{ mt: 3 }} variant='contained'>Back To Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;