// navbar index.js
import "./styles.css";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="container">
      <div className="green">
        <div className="links">
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
            to="/details/:id"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "black" } : undefined
            }
          >
            Details
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
      <div className="red">
        <div className="find">
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
      <div className="iconsBar">
        <div>
          <NavLink
            to="/"
            className="icons"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            <FiShoppingCart />
          </NavLink>
          <NavLink
            to="/"
            className="icons"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            <FiHeart />
          </NavLink>
          <NavLink
            to="/"
            className="icons"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
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
