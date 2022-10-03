import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
// styles
import styles from '../styles/Navbar.module.css';
// icons
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div >
            <AppBar position='sticky' sx={{mb: 4}}>
                <Toolbar className={styles.container}>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/'>
                        <Typography variant="h5" fontFamily={'Montserrat'}>
                            Online shop
                        </Typography>
                    </Link>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/store'>
                        <div className={styles.basketCont}>
                            <MdOutlineLocalGroceryStore fontSize={'30px'} />
                            <span>2</span>
                        </div>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;