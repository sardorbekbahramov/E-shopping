import React from 'react';
import { TbPlayerTrackNext } from "react-icons/tb";
import "./home.css";
import {Link} from "react-router-dom";


const Home = () => {
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
                                    <h2>trending products</h2>
                                </div>
                                <div className="cate">
                                    <h3>New</h3>
                                    <h3>Featured</h3>
                                    <h3>Top Selling</h3>
                                </div>
                            </div>
                        </div>

                        <div className="right_box">

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;