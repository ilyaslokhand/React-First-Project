import { NavLink } from "react-router-dom";
import "./Header.css";
import image3 from "../../assets/image3.png";

const Header = () => {
  const NavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "Orange" : "",
    };
  };

  return (
    <div className="header-container">
      <div className="nav">
        <div className="nav-logo">
          <img src={image3} alt="Logo" />
        </div>

        <ul className="menu">
          <li>
            <NavLink style={NavLinkStyle} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={NavLinkStyle} to="/about-us">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              style={NavLinkStyle}
              to="/contact-us"
              className="contact-us-button"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
