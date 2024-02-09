import React from 'react';
import shop_left from "../../images/image/shop_left.avif"
import shop_banner from '../../images/image/shop_top.webp'
import newImg from '../../images/image/new.png'
import { LuTv } from "react-icons/lu";
import { FaStar, FaLaptopCode } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { BsSmartwatch, BsSpeaker } from "react-icons/bs";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { MdOutlineElectricBolt } from "react-icons/md";

import notfcImg from '../../images/image/check-circle (1).svg'
import "./shop.css"

const Shop = ({shop, filterCategory, allCategory, addtocart, showNotfc}) => {
    return (
        <>
        {
                showNotfc && (
                    <>
                    <div className="notification">
                        <div className="notification__body">
                            <img
                            src={notfcImg}
                            alt="Success"
                            className="notification__icon"
                            />
                            The product has been added to cart! &#128640;
                        </div>
                        <div className="notification__progress"></div>
                    </div>
                    </>
                )
            }
            <div className="shop">
                <h2><img src={newImg} alt="newlogo" /> Shop</h2>
                <p>Home . shop</p>
                <div className="container">
                    <div className="left_box">
                        <div className="category">
                            <div className="header">
                                <h2 onClick={allCategory}>all categories</h2>
                            </div>
                            <div className="box">
                                <ul>
                                    <li onClick={()=> filterCategory('tv')}><LuTv /> tv</li>
                                    <li onClick={()=> filterCategory('laptop')}><FaLaptopCode /> laptop</li>
                                    <li onClick={()=> filterCategory('phone')}><IoIosPhonePortrait/> phone</li>
                                    <li onClick={()=> filterCategory('watch')}><BsSmartwatch /> watch</li>
                                    <li onClick={()=> filterCategory('speaker')}><BsSpeaker /> speaker</li>
                                    <li onClick={()=> filterCategory('headphone')}><FaHeadphonesSimple /> headphone</li>
                                    <li onClick={()=> filterCategory('electronics')}><MdOutlineElectricBolt /> electronics</li>
                                </ul>
                            </div>
                        </div>

                        <div className="banner">
                            <div className="img_box">
                                <img src={shop_left} alt="shop" />
                            </div>
                        </div>
                    </div>

                    <div className="right_box">
                        <div className="banner">
                            <div className="img_box">
                                <img src={shop_banner} alt="banner" />
                            </div>
                        </div>

                        <div className="product_box">
                            <h2>Shop Products</h2>
                            <div className="product_container">
                                {
                                    shop.map((elem)=> {
                                        return(
                                            <>
                                                <div className="box">
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
                                                                <p>${elem.price}</p>
                                                            </div>
                                                            <div className="detail_btn">
                                                                <button onClick={()=> addtocart(elem)}>Add To Cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
