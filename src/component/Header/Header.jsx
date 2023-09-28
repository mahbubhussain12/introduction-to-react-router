import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
       
            <nav>
                <h2 className='title'>My Website</h2> <br />
                <Link to="/">Home</Link>
                <Link to="users">Our Users</Link>
                <Link to="/post">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                
            </nav>
        </div>
    );
};

export default Header;