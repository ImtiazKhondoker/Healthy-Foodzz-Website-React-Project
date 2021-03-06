import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        .then(products =>{
            setProducts(products)
        })
    }, [] )
    return (
        <div className="container mx-auto pb-24 ">
            <h2 className="text-lg font-bold my-8" >Products</h2>
            <div className="grid grid-cols-5 my-8 gap-24">
                {
                    products.map(product => <Product key={product.id} product={product} />)
                }
            </div>
            
        </div>
    );
};

export default Products;