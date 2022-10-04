import { Button, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import trashIcon from '../Assets/trash.svg';

import { isInCart, quantityCount, shorten } from '../helper/functions';
import { BiChevronLeft } from 'react-icons/bi'

//styles
import styles from '../styles/Products.module.css'
import Footer from './Footer';
import Navbar from './Navbar';
import { addItem, decrease, increase, removeItem } from '../Redux/cart/CartAction';
import { useDispatch, useSelector } from 'react-redux';
const SearchedItem = () => {
    
    const items = useSelector(state => state.cartState)
    const dispatch = useDispatch()
    const [searchedItems, setSearchedItem] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    const getProducts = (category) => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => setSearchedItem(res.data))

    }

    useEffect(() => {
        getProducts(params.search)
    }, [])

    if (!searchedItems.length) return navigate('/notfound')

    return (
        <>
            <Navbar />
            <Container>
                <BiChevronLeft onClick={() => navigate(-1)} style={{ fontSize: '40px', marginTop: '30px', cursor: 'pointer' }} />
                <Typography variant='h4' fontFamily={'Montserrat'} sx={{ margin: '45px 5px' }}>Products<span style={{ color: '#e30c222' }}>({params.search})</span></Typography>
                <Grid container spacing={2} >
                    {
                        searchedItems?.map(product => {
                            return (
                                    <div className={styles.container} key={product.id}>
                                        <img src={product.image} className={styles.cardImage} />
                                        <h3>{shorten(product.title)}</h3>
                                        <p>{product.price} $</p>
                                        <div className={styles.linkContainer}>
                                            <Link to={`/products/${product.id}`}>DetailsPage</Link>
                                            <div className={styles.buttonContainer}>
                                                {quantityCount(items, items.id) === 1 &&
                                                    <button className={styles.smallButton} onClick={() => dispatch(removeItem(items))}><img src={trashIcon} alt="trash" /></button>
                                                }
                                                {
                                                    quantityCount(items, items.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(items))}>-</button>
                                                }
                                                {
                                                    quantityCount(items, items.id) > 0 &&
                                                    <span className={styles.counter}>{quantityCount(items, items.id)}</span>
                                                }


                                                {
                                                    isInCart(items, items.id) ?
                                                        <button className={styles.smallButton} onClick={() => dispatch(increase(items))}>+</button> :
                                                        <button onClick={() => dispatch(addItem(items))}>ADD_ITEM</button>
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
        </>
    );
};

export default SearchedItem;