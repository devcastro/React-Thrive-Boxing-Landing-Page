import React from "react";
import { Grid } from '@material-ui/core';


import Product from "./Product.jsx";
import useStyles from "./ProductsElements";



const Products = ({ products }) => {

    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={6}>

                {products.map((product) => (

                    <Grid item key={product.id} xs={8} sm={5} md={4} lg={3} xl={2}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>

        </main >
    );
};

export default Products;