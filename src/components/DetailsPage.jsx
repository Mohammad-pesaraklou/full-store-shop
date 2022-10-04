import { Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { shorten } from '../helper/functions';
//styles
import styles from '../styles/Details.module.css'
import Footer from './Footer';


const DetailsPage = () => {

    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const params = useParams()
    const { title, category, image, price, description } = products
    const getProductsById = async (id) => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProducts(res.data))

    }
    useEffect(() => {
        getProductsById(params.id)
    }, [params.id])


    return (
        <div>
            <Container>
                <BiChevronLeft onClick={() => navigate(-1)} style={{ fontSize: '50px', marginTop: '30px', cursor: 'pointer' }} />
                <div className={styles.container}>
                    <img className={styles.image} src={image} alt="product" />
                    <div className={styles.textContainer}>
                        <h3>{title}</h3>
                        <p className={styles.description}>{description}</p>
                        <p className={styles.category}>
                            <span>Category:</span> {category}
                        </p>
                        <div className={styles.buttonContainer}>
                            <span className={styles.price}>{price} $</span>
                            <Link to="/products">Back to Shop</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DetailsPage;