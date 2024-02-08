import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from './Home';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';

const Rout = ({shop, filterCategory, allCategory, addtocart, cart, setCart}) => {
    return (
        <>
           <Routes>
                <Route path='/' element={<Home addtocart={addtocart}/>}/>
                <Route path='/collection' element={<Cart cart={cart} setCart={setCart}/>}/>
                <Route path='/shop' element={<Shop shop={shop} filterCategory={filterCategory} allCategory={allCategory} addtocart={addtocart}/>}/>
           </Routes>
        </>
    );
}

export default Rout;
