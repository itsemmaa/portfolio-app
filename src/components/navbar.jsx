import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="head">
            <ul>
                <li>
                    <Link to="/">EMMA BARNETT</Link>
                </li>
                <li></li>
                <li></li>
                <li>
                    <Link to="/About">ABOUT</Link>
                </li>
                <li>
                    <Link to="/Contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;