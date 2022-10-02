import React, { useState } from 'react';
import { Container, Grid, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
const Search = () => {

    const [search, setSearch] = useState()
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${search}`)
    }

    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <form onSubmit={submitHandler}>
                        <TextField
                            label={
                                <Typography>
                                    Search For Category (jewelery , men's clothing ...)
                                </Typography>
                            }
                            color='primary'
                            variant='filled'
                            type="text"
                            value={search}
                            sx={{ display: 'flex', justifyContent: "center", fontSize: 17, marginTop: '150px', }}
                            onChange={event => setSearch(event.target.value)}
                        />
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Search;