import { Box, Container, LinearProgress, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableCell } from '@mui/material';
import trashIcon from '../Assets/trash.svg'
//components
import Navbar from './Navbar';
import { quantityCount, shorten } from '../helper/functions';
import styles from '../styles/Products.module.css'
import { decrease, increase, removeItem } from '../Redux/cart/CartAction';
import { Link } from 'react-router-dom';

const Store = () => {

    const items = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    console.log(items);

    return (
        <div>
            <Navbar />
            <Container>
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
                                            ["Product", "Price", "Quantity", "Total"].map(item => (
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
                                            console.log(item)
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
                                                    <TableCell align='left'>
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
                                                    <TableCell
                                                        align='left'
                                                        sx={{
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        total
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
                <div>
                    {
                    items.itemsCounter === 0 && <div className={styles.payment}>
                        <p><span>Total Items:</span>{items.counterItem}</p>
                        <p><span>Total payment:</span>{items.total}</p>
                        <div className={styles.buttonContainer}>
                            <button className={styles.checkout} onClick={() => dispatch({ type: "CHECKOUT" })}>Check Out</button>
                            <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
                        </div>
                    </div>
                }

                    {
                        items.checkout && <div className={styles.complete}>
                            <h3>checkout successfully</h3>
                            <Link to='/products'>Products</Link>
                        </div>
                    }

                    {
                        !items.checkout && items.counterItem === 0 && <div className={styles.complete}>
                            <h3>Want to buy?</h3>
                            <Link to='/products'>Products</Link>
                        </div>
                    }</div>
            </Container>
        </div>
    );
};

export default Store;