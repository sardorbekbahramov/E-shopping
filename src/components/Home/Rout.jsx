import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from './Home';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';
import Contact from '../Contact/Contact';

const Rout = ({shop, filterCategory, allCategory, addtocart, cart, setCart, showNotfc}) => {
    return (
        <>
           <Routes>
                <Route path='/' element={<Home addtocart={addtocart} showNotfc={showNotfc}/>}/>
                <Route path='/collection' element={<Cart cart={cart} setCart={setCart}/>}/>
                <Route path='/shop' element={<Shop shop={shop} filterCategory={filterCategory} allCategory={allCategory} addtocart={addtocart} showNotfc={showNotfc}/>}/>
                <Route path='/contact' element={<Contact/>}/>
           </Routes>
        </>
    );
}

export default Rout;
