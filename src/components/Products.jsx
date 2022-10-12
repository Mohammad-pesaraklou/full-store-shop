import React, { useEffect } from 'react';
import { Button, CircularProgress, Container, Grid, LinearProgress, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
///function
import { isInCart, quantityCount, shorten } from '../helper/functions';
//styles
import styles from '../styles/Products.module.css'
// icons
import { BiChevronLeft } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import trashIcon from '../Assets/trash.svg';
// components
import Footer from './Footer';
import Navbar from './Navbar';
import Search from './Search';
// actions
import { addItem, decrease, increase, removeItem } from '../Redux/cart/CartAction';
import { addItemAccount, removeItemAccount } from '../Redux/Account/AccountAction';
import { fetchProduct } from '../Redux/Product/ProductAction';


const Products = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.productState)
    const items = useSelector(state => state.cartState)
    const navigate = useNavigate()


    useEffect(() => {
        if (!data.length) dispatch(fetchProduct())
    }, [])


    if (!data.products) return <LinearProgress color="info" sx={{ transform: 'translateY(10px)' }} />

    return (
        <div className={styles.mainContainer}>
            <Navbar />
            <Container>
                <Search />
                <BiChevronLeft onClick={() => navigate(-1)} style={{ fontSize: '40px', marginTop: '30px', cursor: 'pointer' }} />
                <Typography variant='h4' fontFamily={'Montserrat'} sx={{ margin: '45px 5px' }}>Products</Typography>
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    {
                        data.products?.map(product => {
                            return (
                                <div className={styles.container} key={product.id}>
                                    <img src={product.image} className={styles.cardImage} />
                                    <div>
                                        <AiOutlinePlus className={styles.plus} onClick={() => dispatch(addItemAccount(product))} />
                                        <h3 className={styles.title}>{shorten(product.title)}</h3>
                                    </div>
                                    <p className={styles.price}>$ {product.price}</p>
                                    <div className={styles.linkContainer}>
                                        <Link to={`/products/${product.id}`} className={styles.details}>DetailsPage</Link>
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
            <Footer />

        </div>
    );
};

export default Products;