import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
///function
import { isInCart, quantityCount, shorten } from '../helper/functions';
//styles
import styles from '../styles/Products.module.css'
// icons
import { BiChevronLeft } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import trashIcon from '../Assets/trash.svg';
// components
import Footer from './Footer';
import Navbar from './Navbar';
// actions
import { addItem, decrease, increase, removeItem } from '../Redux/cart/CartAction';

const Account = () => {

    const dispatch = useDispatch();
    const dataAccount = useSelector(state => state.AccountState)
    const items = useSelector(state => state.cartState)
    const navigate = useNavigate()


    return (
        <div>
            <Navbar />
            <Container>
                <div style={{ display: 'flex', alignItems: 'center', margin: '40px 0px' }}>
                    <BiChevronLeft onClick={() => navigate(-1)} style={{ fontSize: '60px', cursor: 'pointer' }} />
                    <Typography variant={'h4'} sx={{ display: 'flex', justifyContent: 'center', margin: '0px auto', fontFamily: 'Montserrat' }}>
                        Your Saved Products
                    </Typography>
                </div>
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    {
                        items?.selectedItems.map(product => {
                            return (
                                <div className={styles.container} key={product.id}>
                                    <img src={product.image} className={styles.cardImage} />
                                    <div>
                                        <BsTrash className={styles.mines} />
                                        <h3 className={styles.title}>{shorten(product.title)}</h3>
                                    </div>
                                    <p className={styles.price}>$ {product.price}</p>
                                    <div className={styles.linkContainer}>
                                        <Link to={`/products/${product.id}`}>DetailsPage</Link>
                                        <div className={styles.buttonContainer}>
                                            {quantityCount(items, product.id) === 1 &&
                                                <button className={styles.smallButton} onClick={() => dispatch(removeItem(product))}><img src={trashIcon} alt="trash" /></button>
                                            }
                                            {
                                                quantityCount(items, product.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(product))}>-</button>
                                            }
                                            {
                                                quantityCount(items, product.id) > 0 &&
                                                <span className={styles.counter}>{quantityCount(items, product.id)}</span>
                                            }


                                            {
                                                isInCart(items, product.id) ?
                                                    <button className={styles.smallButton} onClick={() => dispatch(increase(product))}>+</button> :
                                                    <button onClick={() => dispatch(addItem(product))}>ADD_ITEM</button>
                                            }

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Account;