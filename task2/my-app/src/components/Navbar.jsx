import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
function Navbar() {
    return (
        <nav >
            <div className='nav'>
                <img src="./logo_apple.svg" alt="logo" />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/services">LMS</Link>
                        <ul id="submenu1">
                            <li>cources</li>
                            <li>teachears</li>
                            <li>categories types</li>
                            <li>cources types</li>
                            <li>registration</li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/contact">Blog</Link>
                        <ul id="submenu2">
                            <li>Blog Listing</li>
                            <li>Blog Single</li>
                            <li>teachears</li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/contact">pages</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
                <div className="right-icon">
                    <button className="icons" aria-label="Search">
                        <span className="icon">
                            <IoSearch />
                        </span>
                    </button>
                    <button className="icons" aria-label="Profile">
                        <span className="icon">
                            <IoPersonOutline />
                        </span>
                    </button>
                    <button className="icons" aria-label="Shopping Bag">
                        <span className="icon">
                            <MdOutlineShoppingBag />
                        </span>
                    </button>
                    <button className="icons" aria-label="Favorites">
                        <span className="icon">
                            <FaRegHeart />
                        </span>
                    </button>




                </div>
            </div>
        </nav>
    )

};

export default Navbar;
