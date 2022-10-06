import React, { useContext, useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import backPic from '../Assets/storePic.jpg'
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
// icons
import IconButton from '@mui/material/IconButton';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { MdOutlineAssignmentInd } from 'react-icons/md'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { FcAbout } from 'react-icons/fc'
import { BiLogOut } from 'react-icons/bi'
import { VscSignIn } from 'react-icons/vsc'

//styles
import styles from '../styles/Hero.module.css'
// context
import { authContext } from '../context/AuthContextProvider';


const Hero = () => {

    const [toggle, setToggle] = useState();
    const [open, setOpen] = useState();

    const drawerWidth = 240;
    const { user, logOut } = useContext(authContext)

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
    console.log(user);


    return (
        <Container>
            <div className={styles.container}>
                <div className={styles.container}>
                    <Typography sx={{ fontSize: { xs: '20px', sm: '25px', lg: '32px' } }} fontFamily={'Montserrat'}>
                        <Link className={styles.navText} to='/'>
                            Online shop
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
                        <div>
                            {
                                user?.email ?
                                    <div className={styles.btnContainer}>
                                        <Link className={styles.linkList} to={'/account'}>
                                            <li className={styles.signInItem}>Account</li>
                                        </Link>
                                        <li className={styles.signItem} onClick={logoutHandler}>Log out</li>
                                    </div>
                                    :
                                    <div className={styles.btnContainer}>
                                        <Link className={styles.linkList} to={'/signIn'}>
                                            <li className={styles.signInItem}>Sign In</li>
                                        </Link>
                                        <Link className={styles.linkList} to={'/signUp'}>
                                            <li className={styles.signItem}>Sign Up</li>
                                        </Link>
                                    </div>
                            }
                        </div>
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
            </div >
        </Container >
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