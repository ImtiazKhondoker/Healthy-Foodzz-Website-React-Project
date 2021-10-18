import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const SingleProduct = () => {
    const [product, setProduct] = useState({})
    const param = useParams()
    const history = useHistory()
    
    useEffect(  ()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${param.id}`)
        .then(res => res.json())
        .then(product =>{
            setProduct(product)
        })
    },[param.id])



    return (
        <div className="container mx-auto mt-12" >
            <button className="mb-12 font-bold" onClick={history.goBack}>Back</button>
            <div className="flex">
                <img width="20%" src="/images/tomato.png" alt="" />
                <div className="ml-16">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <div className="text-md">small</div>
                    <div className="font-bold mt-2">Order ID: {product.id}</div>
                    <button className="bg-purple-600 bg-opacity-75 py-1 px-8 rounded-full font-bold mt-4">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;