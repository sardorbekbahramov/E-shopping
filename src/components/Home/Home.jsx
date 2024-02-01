import React, { useState } from 'react';
import { TbPlayerTrackNext } from "react-icons/tb";
import { FaEye, FaHeart, FaFacebookF, FaTwitter, FaInstagram, FaYoutube  } from "react-icons/fa";
import gift from "../../images/image/download.png";
import imgTest from "../../images/image/T1.avif";
import "./home.css";
import {Link} from "react-router-dom";
import Homeproducts from './Dproducts';


const Home = () => {
    const [trendingProduct, setTrendingProduct] = useState(Homeproducts);

//====== filter of home products ===================>
    const filtercate = (type) => {
        const filterproduct = Homeproducts.filter((currEl)=>{
            return currEl.type === type;
        })
        setTrendingProduct(filterproduct);
    }

    // all trending products:
    const allTrendingProducts = ()=> {
        setTrendingProduct(Homeproducts);
    }
//====== filter of home products finished ===========>

    return (
        <>
            <div className="home">
                <div className="top_banner">
                    <div className="content">
                        <h3>Silver Aluminum</h3>
                        <h2>Apple Watch</h2>
                        <p>30% off at your first order</p>
                        <Link to={'/shop'} className='link'>Shop Now <TbPlayerTrackNext className='next_icon'/></Link>
                    </div>
                </div>

                <div className="trending">
                    <div className="container">

                        <div className="left_box">
                            <div className="header">
                                <div className="heading">
                                    <img src={gift} alt="" />
                                    <h2 onClick={allTrendingProducts} >trending products</h2>
                                </div>
                                <div className="cate">
                                    <h3 onClick={()=>filtercate('new')}>New</ h3>
                                    <h3 onClick={()=>filtercate('featured')}>Featured</ h3>
                                    <h3 onClick={()=>filtercate('top')}>Top Selling</h3>
                                </div>
                            </div>

                            <div className="products">
                                <div className="container">
                                    {
                                        trendingProduct.map((item)=>{
                                            return(
                                                <>
                                                    <div className="box">
                                                        <div className="img_box">
                                                            <img src={item.img} alt="productImg" />
                                                            <div className="icon">
                                                                <div className="icon_box">
                                                                    <FaEye />
                                                                </div>
                                                                <div className="icon_box">
                                                                    <FaHeart />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="info">
                                                            <h3>{item.name}</h3>
                                                            <p>${item.price}</p>
                                                            <button className='btn'>Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>

                                <div className="show_more">
                                    <button>Show More</button>
                                </div>
                            </div>
                        </div>
                        
                         
                        <div className="right_box">
                            <div className="right_container">
                                <div className="testimonial">
                                    <div className="head">
                                        <h3>Our testmonial</h3>
                                    </div>

                                    <div className="detail">
                                        <div className="img_box">
                                            <img src={imgTest} alt="testimonial_img" />
                                        </div>
                                        <div className="info">
                                            <h3>stephan robot</h3>
                                            <h4>web designer</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptatem necessitatibus exercitationem doloremque libero quae.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="newsletter">
                                    <div className="head">
                                        <h3>News Letter</h3>
                                    </div>
                                    <div className="form">
                                        <p>join our malling list</p>
                                        <form>
                                            <input required type="email" placeholder='E-mail' autoComplete='off'/>
                                            <div className="btn">
                                                <button type='submit'>subscribe</button>
                                            </div>
                                        </form>
                                        <div className="icon_box">
                                            <div className="icon">
                                                <FaFacebookF  className='icon_id'/>
                                            </div>
                                            <div className="icon">
                                                <FaTwitter className='icon_id'/>
                                            </div>
                                            <div className="icon">
                                                <FaInstagram className='icon_id'/>
                                            </div>
                                            <div className="icon">
                                                <FaYoutube className='icon_id'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="banners">
                    <div className="container">
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
