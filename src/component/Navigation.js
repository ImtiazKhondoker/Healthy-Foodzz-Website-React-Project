import {Link} from 'react-router-dom'

const Navigation = ()=>{
    const cartStyle ={
        background: 'indigo',
        color: 'white',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '8px'
    }
    return(
        <>
            <nav className="container mx-auto flex items-center justify-between ">
                    <Link to="/">
                        <div className="flex items-center ">
                            <img style={{width:70}} src="/images/logo.png" alt="" />
                            <h6 className="font-bold">HEALTHY-FOODZZ</h6>
                        </div>

                    </Link>
                    <ul className="flex items-center">
                        <li><Link to="/">Home</Link></li>
                        <li className="ml-6"><Link to="/products">Products</Link></li>
                        <li className="ml-6">
                            <Link to="/cart">
                                <div style={cartStyle}>
                                    <span>10</span>
                                    <img className="ml-2" src="/images/cart.png" alt="" />
                                </div>
                            </Link>
                        </li>
                    </ul>
            </nav>
        </>
    )
}

export default Navigation;