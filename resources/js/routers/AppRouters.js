import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import Subscription from '../includes/Subscription';
import Blog from '../components/Blog';
import Cart from '../components/Cart';
import Category from '../components/Category';
import Checkout from '../components/Checkout';
import Confirmation from '../components/Confirmation';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Login from '../components/Login';
import Registration from '../components/Registration';
import SingleBlog from '../components/SingleBlog';
import SingleProduct from '../components/SingleProduct';
import Tracking from '../components/Tracking';


const appRouter = () => (
    <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/blog" exact={true} component={Blog} />
            <Route path="/cart" exact={true} component={Cart} />
            <Route path="/category" exact={true} component={Category} />
            <Route path="/checkout" exact={true} component={Checkout} />
            <Route path="/confirmation" exact={true} component={Confirmation} />
            <Route path="/contact" exact={true} component={Contact} />
            <Route path="/home" exact={true} component={Home} />
            <Route path="/login" exact={true} component={Login} />
            <Route path="/registration" exact={true} component={Registration} />
            <Route path="/product/:id" exact={true} component={SingleProduct} />
            <Route path="/blog/:id" exact={true} component={SingleBlog} />
            <Route path="/tracking" exact={true} component={Tracking} />
          </Switch>
            <Subscription/>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default appRouter;
