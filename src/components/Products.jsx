import { Button, CircularProgress, Container, Grid, LinearProgress, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../Redux/Product/ProductAction';
///function
import { isInCart, quantityCount, shorten } from '../helper/functions';
//styles
import styles from '../styles/Products.module.css'
import Search from './Search';
import { BiChevronLeft } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import { addItem, decrease, increase, removeItem } from '../Redux/cart/CartAction';
import trashIcon from '../Assets/trash.svg';


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
                <Grid container spacing={2} >
                    {
                        data.products?.map(product => {
                            return (
                                <div className={styles.container}>
                                    <img src={product.image} className={styles.cardImage} />
                                    <h3>{shorten(product.title)}</h3>
                                    <p>{product.price} $</p>
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
            <Footer />

        </div>
    );
};

export default Products;