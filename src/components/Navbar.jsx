import { AppBar, Toolbar, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
// styles
import styles from '../styles/Navbar.module.css';
// context
import { authContext } from '../context/AuthContextProvider';
// icons
import IconButton from '@mui/material/IconButton';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { MdOutlineAssignmentInd } from 'react-icons/md'
import { FcAbout } from 'react-icons/fc'
import { BiLogOut } from 'react-icons/bi'
import { VscSignIn } from 'react-icons/vsc'

const Navbar = () => {

    const { user, logOut } = useContext(authContext)
    const items = useSelector(state => state.cartState)
    const [toggle, setToggle] = useState();
    const [open, setOpen] = useState();
    const drawerWidth = 240;

    console.log(user);

  
    const handler = () => {
        setToggle(!toggle)
    }
    const OpenHandler = () => {
        setToggle(!open)
    }

    const logoutHandler = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    //  

    return (
        <div >
            <AppBar position='sticky' sx={{ mb: 4 }} >
                <Toolbar className={styles.container}>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/'>
                        <Typography sx={{ fontSize: { xs: '20px', sm: '30px', md: '40px' } }} fontFamily={'Montserrat'}>
                            Online shop
                        </Typography>
                    </Link>
                    <div className={styles.rush}>
                        <div className={styles.navLink} >

                            {
                                user?.email ?
                                    <div className={styles.btnContainer}>
                                        <Link className={styles.linkList} to={'/account'}>
                                            <li className={styles.navListItem}>Account</li>
                                        </Link>
                                        <li className={styles.navListItem} onClick={logoutHandler}>Log out</li>
                                    </div>
                                    :
                                    <div className={styles.btnContainer}>
                                        <Link className={styles.linkList} to={'/signIn'}>
                                            <li className={styles.navListItem} >Sign In</li>
                                        </Link>
                                        <Link className={styles.linkList} to={'/signUp'}>
                                            <li className={styles.navListItem}>Sign Up</li>
                                        </Link>
                                    </div>
                            }
                        </div>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to='/store'>
                            <div className={styles.basketCont}>
                                <MdOutlineLocalGroceryStore fontSize={'30px'} color={"#e0dfda"} />
                                <span>{items.itemsCounter}</span>
                            </div>
                        </Link>
                    </div>
                </Toolbar>
                <Box >
                    <GiHamburgerMenu
                        color="inherit"
                        className={styles.burgerIcon}
                        style={{ fontSize: '40px' }}
                        onClick={OpenHandler}

                    />
                </Box>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                        },

                    }}
                    variant="persistent"
                    anchor="right"
                    open={toggle}
                >
                    <DrawerHeader>
                        <IconButton onClick={handler}>
                            {window.direction === 'rtl' ? <BsChevronLeft /> : <BsChevronRight style={{ fontSize: "30px" }} />}
                        </IconButton>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to='/store'>
                            <div className={styles.basketCont2}>
                                <MdOutlineLocalGroceryStore fontSize={'30px'} color={"#353535ca"} />
                                <span className={styles.basketSpan}>{items.itemsCounter}</span>
                            </div>
                        </Link>
                    </DrawerHeader>
                    <Divider />
                    <Typography variant="h5" fontWeight={600} p={"5px 15px"} sx={{ p: 2 }}>
                        Menu
                    </Typography>
                    <Box>
                        <ul className={styles.menuList}>
                            <Link className={styles.hMenuLi} to="/">
                                <AiOutlineHome fontSize='22px' />
                                <li className={styles.itemMenu}>Home</li>
                            </Link>
                            <div >
                                {
                                    user?.email ?
                                        <div className={styles.btnHamContainer}>
                                            <div style={{ display: 'flex', alignItems: 'center', }}>
                                                <Link className={styles.hMenuLi} to={'/account'}>
                                                    <MdOutlineAccountCircle />
                                                    <li className={styles.itemMenu}>Account</li>
                                                </Link>
                                            </div>
                                            <div className={styles.hMenuLi} style={{ cursor: 'pointer' }}>
                                                <BiLogOut />
                                                <li className={styles.itemMenu} onClick={logoutHandler}>Log out</li>
                                            </div>
                                        </div>
                                        :
                                        <div className={styles.btnHamContainer}>
                                            <div>
                                                <Link className={styles.hMenuLi} to={'/signIn'}>
                                                    <VscSignIn />
                                                    <li className={styles.itemMenu}>Sign In</li>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link className={styles.hMenuLi} to={'/signUp'}>
                                                    <MdOutlineAssignmentInd />
                                                    <li className={styles.itemMenu}>Sign Up</li>
                                                </Link>
                                            </div>
                                        </div>
                                }
                            </div>
                            <Link className={styles.hMenuLi} to="/aboutUs">
                                <FcAbout fontSize='22px' />
                                <li className={styles.itemMenu}>About Us</li>
                            </Link>
                        </ul>
                    </Box>

                </Drawer>
            </AppBar>
        </div>
    );
};
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 10px'
}));
export default Navbar;