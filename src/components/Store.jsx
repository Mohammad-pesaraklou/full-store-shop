import { Container, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
//components
import Navbar from './Navbar';

const Store = () => {

    const items = useSelector(state => state.cartState)

    console.log(items);

    return (
        <div>
            <Navbar />
            <Container>
                <Typography>
                    
                </Typography>
            </Container>
        </div>
    );
};

export default Store;