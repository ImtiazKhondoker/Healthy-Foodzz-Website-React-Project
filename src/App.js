import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Navigation from './component/Navigation';
import ProductsPages from './pages/ProductsPages';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';

function App(){
    return(
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    {/* <Route path="/about" component={About}></Route> */}
                    <Route exact path="/products" component={ProductsPages}></Route>
                    <Route exact path="/products/:id"  component={SingleProduct}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;