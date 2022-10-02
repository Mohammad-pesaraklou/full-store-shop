import { Button, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { shorten } from '../helper/functions';
import { BiChevronLeft } from 'react-icons/bi'
//styles
import styles from '../styles/Product.module.css'
import Footer from './Footer';
const SearchedItem = () => {

    const [searchedItems, setSearchedItem] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    console.log(params);

    const getProducts = (category) => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => setSearchedItem(res.data))

    }

    useEffect(() => {
        getProducts(params.search)
    }, [params.search])

    if(!searchedItems.length) return navigate('/notfound')

    return (
        <>
            <Container>
                <BiChevronLeft onClick={() => navigate(-1)} style={{ fontSize: '40px', marginTop: '30px', cursor: 'pointer' }} />
                <Typography variant='h4' fontFamily={'Montserrat'} sx={{ margin: '45px 5px' }}>Products<span style={{ color: '#e30c222' }}>({params.search})</span></Typography>
                <Grid container spacing={2} >
                    {
                        searchedItems?.map(product => {
                            return (
                                <Grid item xs={12} sm={6} md={4} p={2} key={product.id} >
                                    <div className={styles.cont}>
                                        <img src={product.image} className={styles.image} />
                                        <div className={styles.detailsCont}>
                                            <Typography className={styles.title} variant='h5' fontWeight={600} color={'#212121'} m={4}>
                                                {shorten(product?.title)}
                                            </Typography>
                                            <p className={styles.price}>
                                                $ {product?.price}
                                            </p>
                                        </div>
                                        <div>
                                            <Button variant='contained' sx={{ mb: 2, fontFamily: 'Montserrat' }}>Add Item</Button>
                                        </div>
                                    </div>
                                </Grid>
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