import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import backPic from '../Assets/storePic.jpg'
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { FcAbout } from 'react-icons/fc'
//styles
import styles from '../styles/Hero.module.css'


const Hero = () => {

    const [toggle, setToggle] = useState();
    const [open, setOpen] = useState();

    const drawerWidth = 240;

    const handler = () => {
        setToggle(!toggle)
    }
    const OpenHandler = () => {
        setToggle(!open)
    }




    return (
        <Container>
            <div className={styles.container}>
                <div className={styles.container}>
                    <Typography sx={{fontSize:{xs: '20px',sm: '25px',lg:'32px'}}} fontFamily={'Montserrat'}>
                        <Link className={styles.navText} to='/'>
                            Online store
                        </Link>
                    </Typography>
                </div>
                <div className={styles.listContainer}>
                    <ul className={styles.list}>
                        <Link className={styles.linkList} to={'/'}>
                            <li className={styles.listChild}>Home</li>
                        </Link>
                        <Link className={styles.linkList} to={'/products'}>
                            <li className={styles.listChild}>Product</li>
                        </Link>
                        <Link className={styles.linkList} to={'/about'}>
                            <li className={styles.listChild}>About</li>
                        </Link>
                        <Link className={styles.linkList} to={'/signUp'}>
                            <li className={styles.signItem}>Sign Up</li>
                        </Link>
                    </ul>

                </div>
                <Box>
                    <GiHamburgerMenu
                        color="inherit"
                        className={styles.burgerIcon}
                        onClick={OpenHandler}
                        style={{ fontSize: '40px' }}
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
                            <Link className={styles.hMenuLi} to="/account">
                                <MdOutlineAccountCircle fontSize='22px' />
                                <li className={styles.itemMenu}>Account</li>
                            </Link>
                            <Link className={styles.hMenuLi} to="/products">
                                <MdOutlineLocalGroceryStore fontSize='22px' />
                                <li className={styles.itemMenu}>Products</li>
                            </Link>
                            <Link className={styles.hMenuLi} to="/aboutUs">
                                <FcAbout fontSize='22px' />
                                <li className={styles.itemMenu}>About Us</li>
                            </Link>
                        </ul>
                    </Box>

                </Drawer>

                <img src={backPic} className={styles.backGround} />
                <div className={styles.backText}>
                    <Typography gutterBottom color={"darkslategray"} sx={{ fontSize: { xs: '30px', sm: '37px', md: '48px', lg: '70px' } }} fontFamily={'Montserrat'}>
                        Ask us The Bests
                    </Typography>
                    <Typography gutterBottom color={"darkslategray"} sx={{ fontSize: { xs: '20px', sm: '25px', md: '30px', lg: '36px' } }} fontFamily={'Montserrat'}>
                        - we care about your money
                    </Typography>
                    <Typography color={"darkslategray"} sx={{ fontSize: { xs: '20px', sm: '25px', md: '30px', lg: '36px' } }} fontFamily={'Montserrat'}>
                        - online shop
                    </Typography>
                    <Link className={styles.btnLink} to={'/products'}>
                        <Button variant='contained' sx={{ mt: 4, fontFamily: 'Montserrat' }}>Go To Products!</Button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default Hero;