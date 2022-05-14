import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../../images/img.png";

const Header = () => {
  return (
    <div>
      <nav>
        <motion.ul
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          className="list"
        >
          <div>
            <Link to='/'>
            <img
              style={{
                width: 140,
              }}
              src={img}
            />
            </Link>
          </div>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/sign-in">Login</Link>
            </li>
          </div>
        </motion.ul>
      </nav>
    </div>
  );
};

export default Header;
