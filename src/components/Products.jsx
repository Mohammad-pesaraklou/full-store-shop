import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../Redux/Product/ProductContext';
///function
import { shorten } from '../helper/functions';
//styles
import styles from '../styles/Product.module.css'


const Products = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.productState)

    useEffect(() => {
        if (!data.length) dispatch(fetchProduct())
    }, [])


    return (
        <div>
            <Container>
                <Typography variant='h4' fontFamily={'Montserrat'} p={3}>Products</Typography>
                <Grid container spacing={2}>
                    {
                        // data.products.map(product => {
                        //     return (
                        //         <Grid item xs={12} sm={6} md={4} p={2} key={product.id} >
                        //             <div className={styles.cont}>
                        //                 <img src={product.image} className={styles.image} />
                        //                 <Typography variant='h5' fontWeight={600} color={'#212121'} m={4}>
                        //                     {shorten(product.title)}
                        //                 </Typography>
                        //                 <div>
                        //                             {/* <Button variant='contained' onClick={() => dispatch(addItem(product))}>Add Item</Button> */}
                        //                 </div>
                        //             </div>
                        //         </Grid>
                        //     )
                        // })
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Products;