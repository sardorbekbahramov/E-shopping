import React, { useEffect, useState } from 'react';
import { TbPlayerTrackNext } from "react-icons/tb";
import { FaEye, FaHeart, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaShoppingCart  } from "react-icons/fa";
import "./home.css";
import {Link} from "react-router-dom";
import Homeproducts from './Dproducts';

import gift from "../../images/image/download.png";
import imgTest from "../../images/image/T1.avif";
import multiBanner1 from '../../images/image/Multi-Banner-1.avif';
import multiBanner2 from '../../images/image/Multi-banner-2.avif';
import multiBanner3 from '../../images/image/Multi-Banner-3.webp';
import multiBanner4 from '../../images/image/Multi-banner-4.avif';
import multiBanner5 from '../../images/image/Multi-Banner-5.webp';



const Home = ({addtocart}) => {
    // Product category
    const [newProduct, setNewProduct] = useState([]);
    const [featuredProduct, setFeaturedProduct] = useState([]);
    const [topProduct, setTopProduct] = useState([]);

//====== filter of home products ===================>
    // Tranding Products
    const [trendingProduct, setTrendingProduct] = useState(Homeproducts);

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

// ====== Product type page ========================>

useEffect(()=>{
    productcategory();
}, []);
const productcategory = ()=> {
    // New Product
    const newcategory = Homeproducts.filter((elType)=>{
        return elType.type === 'new' 
    })
    setNewProduct(newcategory);

    // Featured Product
    const featuredcategory = Homeproducts.filter((elType)=>{
        return elType.type === 'featured' 
    })
    setFeaturedProduct(featuredcategory);

    //Top Product
    const topcategory = Homeproducts.filter((elType)=>{
        return elType.type === 'top' 
    })
    setTopProduct(topcategory);
}
// ====== Product type page  finished===============>

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
                                    <h2 onClick={allTrendingProducts} >All trending products</h2>
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
                                                            <button onClick={()=>addtocart(item)} className='btn'>Add To Cart</button>
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
                                            <div className="area">
                                                <textarea id="text_area" name="text_area" placeholder='Enter your ideas here ...'></textarea>
                                            </div>
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
                        <div className="left_box">
                            <div className="box">
                                <img src={multiBanner1} alt="multi-banner" />
                            </div>
                            <div className="box">
                                <img src={multiBanner2} alt="multi-banner" />
                            </div>
                        </div>
                        <div className="right_box">
                            <div className="top">
                                <img src={multiBanner3} alt="multi-banner-top" />
                                <img src={multiBanner4} alt="multi-banner-top" />
                            </div>

                            <div className="bottom">
                                <img src={multiBanner5} alt="multi-banner-bottom" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product_type">
                    <div className="container">
                       <div className="box">
                            <div className="header">
                                <h2>New Products</h2>
                            </div>
                                {
                                    newProduct.map((product)=>{
                                        return(
                                            <>
                                                <div className="product_box">
                                                    <div className="img_box">
                                                        <img src={product.img} alt="product_img" />
                                                    </div>
                                                    <div className="detail">
                                                        <h3>{product.name}</h3>
                                                        <p>${product.price}</p>

                                                        <div className="icon">
                                                            <button><FaEye /></button>
                                                            <button><FaHeart /></button>
                                                            <button><FaShoppingCart onClick={()=>addtocart(product)}/></button>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </>
                                        )
                                    })
                                }
                       </div>

                       <div className="box">
                            <div className="header">
                                <h2>Featured Products</h2>
                            </div>
                                {
                                    featuredProduct.map((product)=>{
                                        return(
                                            <>
                                                <div className="product_box">
                                                    <div className="img_box">
                                                        <img src={product.img} alt="product_img" />
                                                    </div>
                                                    <div className="detail">
                                                        <h3>{product.name}</h3>
                                                        <p>${product.price}</p>

                                                        <div className="icon">
                                                            <button><FaEye /></button>
                                                            <button><FaHeart /></button>
                                                            <button><FaShoppingCart onClick={()=>addtocart(product)}/></button>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </>
                                        )
                                    })
                                }
                       </div>

                       <div className="box">
                            <div className="header">
                                <h2>Top Products</h2>
                            </div>
                                {
                                    topProduct.map((product)=>{
                                        return(
                                            <>
                                                <div className="product_box">
                                                    <div className="img_box">
                                                        <img src={product.img} alt="product_img" />
                                                    </div>
                                                    <div className="detail">
                                                        <h3>{product.name}</h3>
                                                        <p>${product.price}</p>

                                                        <div className="icon">
                                                            <button><FaEye /></button>
                                                            <button><FaHeart /></button>
                                                            <button><FaShoppingCart onClick={()=>addtocart(product)}/></button>
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
        </>
    );
}

export default Home;
