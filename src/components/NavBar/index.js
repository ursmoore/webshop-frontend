// navbar index.js
import styles from "./styles.css";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";

const NavBar = () => {
  return (
    <div class="container">
      <div class="green">
        <NavLink
          to="/shop"
          className="links"
          style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
        >
          TheShop Home Product Blog Shop Contact
        </NavLink>
      </div>
      <div class="red">
        <NavLink
          to="/shop"
          className="links"
          style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
        >
          SEARCH
        </NavLink>
      </div>
      <div class="iconsBar">
        <div>
          <NavLink
            to="/"
            className="icons"
            style={({ isActive }) =>
              isActive ? { color: "black" } : undefined
            }
          >
            <FiShoppingCart />
          </NavLink>
          <NavLink
            to="/"
            className="icons"
            style={({ isActive }) =>
              isActive ? { color: "black" } : undefined
            }
          >
            <FiHeart />
          </NavLink>
          <NavLink
            to="/"
            className="icons"
            style={({ isActive }) =>
              isActive ? { color: "black" } : undefined
            }
          >
            <FiUser />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { NavBar };
