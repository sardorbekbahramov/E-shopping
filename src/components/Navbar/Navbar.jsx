import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "./nav.css"
import logoNav from '../../images/image/logo.webp'
import { FaBars, FaSearch, FaRegUser } from "react-icons/fa";
import { CiLogin, CiLogout } from "react-icons/ci";
import { MdLocalShipping } from "react-icons/md";
import {Link} from "react-router-dom";

const Nav = () => {

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return (
            <div className='loading_page'>
                <h1>Loading ...</h1>
                <p>please wait ...</p>
            </div>
        );
    }



    return (
        <>
            <div className="header">
                <div className="top_header">
                    <div className="icon">
                        <MdLocalShipping/>
                    </div>
                    <div className="info">
                        <p>Free Shipping when Shopping upto $1000</p>
                    </div>
                </div>

                <div className="mid_header">
                    <div className="logo">
                        <img src={logoNav} alt="navbar_logo" />
                    </div>
                    <div className="search_box">
                        <input type="text" value={""} placeholder='Search products you need ...' />
                        <button><FaSearch className='search_icon'/></button>
                    </div>

                    {
                        isAuthenticated ?
                        // Log out button
                        <div className="user">
                            <div className="icon">
                                <CiLogout />
                            </div>
                
                        <div className="btn">
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Log out</button>
                            </div>
                        </div>
                        :
                        // Log in button
                        <div className="user">
                            <div className="icon">
                                <CiLogin />
                            </div>
                            <div className="btn">
                                <button onClick={() => loginWithRedirect()} >Sign in</button>
                            </div>
                        </div>
                    }

                </div>

                <div className="last_header">
                    <div className="user_profile">

                        {
                            // user profile info will show here
                            isAuthenticated ? 
                            <>
                                <div className="icon">
                                    <img src={user.picture} alt={user.name} />
                                </div>
                                <div className="info">
                                    <h2>{user.name}</h2>
                                    <p>{user.email}</p>
                                </div>
                                
                            </>
                            :
                            <>
                                <div className="icon_user">
                                    <FaRegUser className='user_icon'/>
                                </div>
                                <div className="info_user">
                                    <p className='user_info'>Please Login ...</p>
                                </div>
                            </>
                        }

                    </div>

                    <div className="nav">
                        <ul>
                            <li><Link to="/" className='link' >Home</Link></li>
                            <li><Link to="/shop" className='link' >Shop</Link></li>
                            <li><Link to="/collection" className='link' >Collection</Link></li>
                            <li><Link to="/about" className='link' >About</Link></li>
                            <li><Link to="/contact" className='link' >Contact</Link></li>
                        </ul>
                    </div>

                    <div className="offer">
                        <p>flat 10% over all iphones</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;