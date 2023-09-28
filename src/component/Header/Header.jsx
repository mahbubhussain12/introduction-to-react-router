import {  NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
       
            <nav>
                <h2 className='title'>My Website</h2> <br />
                 <NavLink to="/">Home</NavLink>
                <NavLink to="users">Our Users</NavLink>
                <NavLink to="/post">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;