import React from 'react';
import { FaStar } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import cartImg from '../../images/image/cart.png'
import { Link } from 'react-router-dom';
import './cart.css'

const Cart = ({cart, setCart}) => {
// ======= Increase Quantity of product ===========>
    const increaseQty = (product)=> {
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((elem)=>{
            return elem.id === product.id ? {...exist, qty: exist.qty + 1} : elem
        }));
    }

// ======= Decrease Quantity of product ===========>
    const decreaseQty = (product)=> {
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((elem)=>{
            return elem.id === product.id ? {...exist, qty: exist.qty - 1} : elem
        }));
    }
// ===== Finished Increase and Decrease ===========>
// ========= remove close function ================>
    const remove = (product)=> {
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        if(exist.qty > 0){
            setCart(cart.filter((elem)=>{
                return elem.id !== product.id
            }))
        }
    }
// ========= remove close function finished =======>


    return (
        <>
        <div className="cart">
            <div className="product_box">
                <div className="header">
                    <img src={cartImg} alt="cartimg" />
                    <h2>cart</h2>
                </div>
                {
                    cart.length === 0 ?
                    <>
                        <div className="empty_cart">
                            <h2>Your Shopping cart is empty</h2>
                            <div className="btn">
                                <Link to={'/shop'}><button>Shop Now <img src={cartImg} alt="cartimg" /></button></Link>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="product_container">
                                {
                                    cart.map((elem, index)=> {
                                        return(
                                            <>
                                                <div key={index} className="box">
                                                    <div className="close_icon">
                                                        <IoIosClose onClick={()=> remove(elem)}/>
                                                    </div>
                                                    <div className="img_box">
                                                        <img src={elem.img} alt="shopImg" />
                                                    </div>
                                                    <div className="detail">
                                                        <h4>{elem.name}</h4>
                                                        <div className="btn_box">
                                                            <div className="detail_status">
                                                                <div className="icon">
                                                                    <ul>
                                                                        <li><FaStar /></li>
                                                                        <li><FaStar /></li>
                                                                        <li><FaStar /></li>
                                                                        <li><FaStar /></li>
                                                                        <li><FaStar /></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="price">
                                                                    <p>${elem.price}</p>
                                                                    <p>${elem.price * elem.qty}</p>
                                                                </div>
                                                            </div>
                                                            <div className="detail_btn quantity">
                                                                <button onClick={()=>increaseQty(elem)}>+</button>
                                                                <button onClick={()=>decreaseQty(elem)}>-</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                    </>
                }
                            
            </div>
        </div>
        </>
    );
}

export default Cart;
