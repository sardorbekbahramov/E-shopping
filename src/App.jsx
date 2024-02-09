import React, { useState } from "react";
import Nav from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom"
import Rout from "./components/Home/Rout";
import Footer from "./components/Footer/Footer";
import Homeproducts from "./components/Home/Dproducts";

function App() {
  //============ Shop search Filter ======================>
  const [search, setSearch] = useState('');
  const searchProducts = ()=>{
    const searchlength = (search || []).length === 0;
    if(searchlength){
      alert('Please, search something!');
      setShop(Homeproducts)
    } else{
      const searchfilter = Homeproducts.filter((product)=>{
        return product.cat === search
      })
        setShop(searchfilter); 
    } 
  }
  //============ Shop search Filter finished =============>


  //============ Shop category filter =====================>
  const [shop, setShop] = useState(Homeproducts);

  const filterCategory = (cat)=> {
    const catefilter = Homeproducts.filter((product)=>{
      return product.cat === cat
    })
    setShop(catefilter)
  }
  const allCategory = ()=> {
    setShop(Homeproducts)
  }
 //============ Shop category filter finished ==============>
  const [cart, setCart] = useState([]);
  const [showNotfc, setShowNotfc] = useState(false);

  const addtocart =(product)=> {
    const exist = cart.find((x)=>{
      return x.id === product.id
    })
    if(exist){
      alert('not added, already exist it ...');
    }else{
      setCart([...cart, {...product, qty: 1}]);
      setShowNotfc(prev => !prev)
      setTimeout(() => {
        setShowNotfc(false);
      }, 3000);
    }
  };

// ================= Add to cart collection =================>


// ============ Add to cart collection finished =============>
  return (
    <>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchProducts={searchProducts}/>
        <Rout showNotfc={showNotfc} cart={cart} setCart={setCart} shop={shop} filterCategory={filterCategory} allCategory={allCategory} addtocart={addtocart}/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
