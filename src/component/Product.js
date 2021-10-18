import { Link } from "react-router-dom";

const Product = (props)=>{
    const {product} = props
    return(
        <Link to={`/products/${product.id}`}>
        
            <div>
                <img src="/images/tomato.png" alt="" />
                <div className="text-center">
                    <h2 className="text-lg font-bold py-2">{product.name}</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>Order ID: {product.id}</span>
                    <button className="bg-purple-600 bg-opacity-100 text-white py-1 px-4 rounded-full font-bold">ADD</button>
                </div>
            </div>
        
        </Link>
    )
}

export default Product;