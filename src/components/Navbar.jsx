import { AppBar, Toolbar, Typography } from '@mui/material';
import React, { useContext } from 'react';
// styles
import styles from '../styles/Navbar.module.css';
// icons
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authContext } from '../context/AuthContextProvider';


const Navbar = () => {

    const { user, logOut } = useContext(authContext)
    const items = useSelector(state => state.cartState)
    const logoutHandler = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div >
            <AppBar position='sticky' sx={{ mb: 4 }}>
                <Toolbar className={styles.container}>
                    <div>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to='/'>
                            <Typography variant="h5" fontFamily={'Montserrat'}>
                                Online shop
                            </Typography>
                        </Link>
                    </div>
                    <div className={styles.navLink} >

                        {
                            user?.email ?
                                <ul className={styles.navList} >
                                    <div className={styles.btnContainer}>
                                        <Link className={styles.linkList} to={'/account'}>
                                            <li className={styles.navListItem}>Account</li>
                                        </Link>
                                        <li className={styles.navListItem} onClick={logoutHandler}>Log out</li>
                                    </div>
                                </ul>
                                :
                                <div className={styles.btnContainer}>
                                    <Link className={styles.linkList} to={'/signIn'}>
                                        <li className={styles.navListItem}>Sign In</li>
                                    </Link>
                                    <Link className={styles.linkList} to={'/signUp'}>
                                        <li className={styles.navListItem}>Sign Up</li>
                                    </Link>
                                </div>
                        }
                    </div>
                    <div>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to='/store'>
                            <div className={styles.basketCont}>
                                <MdOutlineLocalGroceryStore fontSize={'30px'} />
                                <span>{items.itemsCounter}</span>
                            </div>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;