import { Box, Button, Container, LinearProgress, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableCell } from '@mui/material';
import trashIcon from '../Assets/trash.svg'
import { Link, useNavigate } from 'react-router-dom';
// picture
import pic from '../Assets/success.png';
//function
import { quantityCount, shorten } from '../helper/functions';
//components
import Navbar from './Navbar';
//styles
import styles from '../styles/Products.module.css'
//actions
import { decrease, increase, removeItem } from '../Redux/cart/CartAction';
import { BiChevronLeft } from 'react-icons/bi';

const Store = () => {

    const items = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <Container>
                <BiChevronLeft onClick={() => navigate(-1)} style={{ fontSize: '40px', marginTop: '30px', cursor: 'pointer' }} />
                <Typography variant={'h4'} sx={{ display: 'flex', justifyContent: 'center', margin: '30px 0px', fontFamily: 'Montserrat' }}>
                    Your Store Shop
                </Typography>
                <TableContainer>
                    {
                        !items.selectedItems ? <LinearProgress sx={{ backgroundColor: "gold" }} /> : (
                            <Table>
                                <TableHead sx={{ backgroundColor: "#EEBC1D" }}>
                                    <TableRow>
                                        {
                                            ["Product", "Price", "Quantity"].map(item => (
                                                <TableCell
                                                    sx={{ color: "black", fontWeight: 700, fontFamily: 'Montserrat' }}
                                                    key={item}
                                                >
                                                    {item}
                                                </TableCell>
                                            ))
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        items.selectedItems?.map(item => {
                                            return (
                                                <TableRow
                                                    className='row'
                                                    key={item.id}
                                                // onClick={() => navigate.push(`/coin/${inf.id}`)}
                                                >
                                                    <TableCell component="th"
                                                        scope='row'
                                                        sx={{
                                                            display: 'flex',
                                                            gap: 15
                                                        }}
                                                    >
                                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                                            <img
                                                                src={item.image}
                                                                height="100"
                                                                style={{
                                                                    marginBottom: "10px", cursor: "pointer"
                                                                }}
                                                            />
                                                            <span style={{
                                                                textTransform: "capitalize",
                                                                fontSize: 22
                                                            }}>
                                                                {shorten(item.title)}
                                                            </span>

                                                        </div>
                                                    </TableCell>
                                                    <TableCell align='left' sx={{ fontWeight: '600' }}>
                                                        $ {item?.price}
                                                    </TableCell>
                                                    <TableCell align='left' >
                                                        <Box >
                                                            {quantityCount(items, item.id) === 1 &&
                                                                <button className={styles.smallButton} onClick={() => dispatch(removeItem(item))}><img src={trashIcon} alt="trash" /></button>
                                                            }
                                                            {
                                                                quantityCount(items, item.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(item))}>-</button>
                                                            }
                                                            {
                                                                quantityCount(items, item.id) > 0 &&
                                                                <span className={styles.counter}>{quantityCount(items, item.id)}</span>
                                                            }
                                                            <button className={styles.smallButton} onClick={() => dispatch(increase(item))}>+</button>
                                                        </Box>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        )
                    }
                </TableContainer>
                <div className={styles.bigContainer}>
                    <div className={styles.cont}>
                        {
                            items.itemsCounter > 0 && <div className={styles.payment}>
                                <p><span>Total Items:</span>{items.itemsCounter}</p>
                                <p><span>Total payment:</span>{items.total}</p>
                                <div className={styles.buttonContainer}>
                                    <button className={styles.checkout} onClick={() => dispatch({ type: "CHECKOUT" })}>Check Out</button>
                                    <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
                                </div>
                            </div>
                        }

                        {
                            items.checkOut && <div className={styles.complete} >
                                <img src={pic} alt='successfully'/>
                                <h3>Thank You For Your Purchase</h3>
                                <Link to='/products' style={{ textDecoration: 'none', color: '#1a73e8', }}><Button variant='contained' sx={{ fontFamily: 'Montserrat', mt: 1 }}>Continue Shopping</Button></Link>
                            </div>
                        }

                        {
                            !items.checkOut && items.itemsCounter === 0 && <div className={styles.complete}>
                                <h3>Want to buy?</h3>
                                <div>
                                    <Link to='/products' style={{ textDecoration: 'none', color: '#1a73e8', }}>Products</Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Store;