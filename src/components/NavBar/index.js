// navbar index.js
import styles from "./styles.css";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";

const NavBar = () => {
  return (
    <div class="container">
      <div class="green">
        <div class="links">
          <NavLink
            to="/shop"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "black" } : undefined
            }
          >
            TheShop
          </NavLink>
          <NavLink
            to="/shop"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "black" } : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "black" } : undefined
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/shop"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "black" } : undefined
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/shop"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "black" } : undefined
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/shop"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "black" } : undefined
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
      <div class="red">
        <div class="find">
          <NavLink
            to="/shop"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "black" } : undefined
            }
          >
            SEARCH
          </NavLink>
        </div>
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
