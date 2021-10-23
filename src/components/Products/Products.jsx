import React from "react";
import { Grid } from '@material-ui/core';
import { productData } from "./data";

import Product from "./Product.jsx";
import useStyles from "./ProductsElements";



const ProductCard = () => {

    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={6}>
                {productData.map((product) => (
                    <Grid item key={product.id} xs={8} sm={5} md={4} lg={3} xl={2}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>

        </main >
    )
};

export default ProductCard;