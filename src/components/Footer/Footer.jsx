import React from 'react';
import "./footer.css";
import { FaPiggyBank, FaHeadphones } from "react-icons/fa6";
import { FaShippingFast, FaWallet } from "react-icons/fa";
import logo_footer from "../../images/image/logo.webp"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="left_box">
                        <div className="box">
                            <div className="icon_box">
                                <FaPiggyBank/>
                            </div>
                            <div className="detail">
                                <h3>Great Saving</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon_box">
                                <FaShippingFast />
                            </div>
                            <div className="detail">
                                <h3>Free Delevery</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon_box">
                                <FaHeadphones />
                            </div>
                            <div className="detail">
                                <h3>24/7 Support</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon_box">
                                <FaWallet />
                            </div>
                            <div className="detail">
                                <h3>Money Back</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="right_box">
                        <div className="header">
                            <img src={logo_footer} alt="logo" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisicing dolor sit</p>
                        </div>

                        <div className="bottom">
                            <div className="box">
                                <h3>Our Company</h3>
                                <ul>
                                    <li>About Us</li>
                                    <li>Account</li>
                                    <li>Payment</li>
                                    <li>Help Center </li>
                                </ul>
                            </div>

                            <div className="box">
                                <h3>Products</h3>
                                <ul>
                                    <li>Delevery</li>
                                    <li>Track Order</li>
                                    <li>Terms & Conditions</li>
                                    <li>Customer Care</li>
                                </ul>
                            </div>

                            <div className="box">
                                <h3>Contact</h3>
                                <ul>
                                    <li>Adress: 70 Washengton, USA</li>
                                    <li>Email: ulib.email@gmail.com</li>
                                    <li>Phone: +1 155 356 957</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
