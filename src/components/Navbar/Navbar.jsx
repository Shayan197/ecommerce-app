import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='' />
                <p>SHOPPER</p>
            </div>

            {/* Hamburger icon */}
            <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                ☰
            </div>

            <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <li onClick={() => { setMenu("shop"); setIsMobileMenuOpen(false); }}>
                    <Link to='/' style={{ textDecoration: 'none', color: '#626262' }}>Shop</Link>
                    {menu === "shop" && <hr />}
                </li>
                <li onClick={() => { setMenu("mens"); setIsMobileMenuOpen(false); }}>
                    <Link to='/mens' style={{ textDecoration: 'none', color: '#626262' }}>Men</Link>
                    {menu === "mens" && <hr />}
                </li>
                <li onClick={() => { setMenu("womens"); setIsMobileMenuOpen(false); }}>
                    <Link to='/womens' style={{ textDecoration: 'none', color: '#626262' }}>Women</Link>
                    {menu === "womens" && <hr />}
                </li>
                <li onClick={() => { setMenu("kids"); setIsMobileMenuOpen(false); }}>
                    <Link to='/kids' style={{ textDecoration: 'none', color: '#626262' }}>Kids</Link>
                    {menu === "kids" && <hr />}
                </li>

                {/* Mobile Login-Cart */}
                <div className='nav-login-cart mobile'>
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={cart_icon} alt='' /></Link>
                    <div className='nav-cart-count'>{getTotalCartItems()}</div>
                </div>
            </ul>

            {/* Desktop Login-Cart */}
            <div className='nav-login-cart desktop'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='' /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;
