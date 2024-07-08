import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white">
      <nav className="flex h-[80px] w-[100%] items-center pt-12 pl-16">
        <div>
          <img
            className=""
            src="https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2018/01/logo06-free-img.png"
            alt=""
          />
        </div>
        <ul className="flex gap-12  pl-20 font-bold text-gray-500 ">
          <li>
            <Link to="/">All Products</Link>
          </li>
          <li>
            <Link to="/sofa">Sofa</Link>
          </li>
          <li>
            <Link to="/chair">Chair</Link>
          </li>
          <li>
            <a href="1">
              <Link to="/table">Table</Link>
            </a>
          </li>
        </ul>
        <div className="flex gap-12 pl-36 text-gray-500 font-bold ">
          <h2 className="cursor-pointer">About Us</h2>
          <h2 className="cursor-pointer">My Account</h2>
          <p>$0.00</p>
          <p className="cursor-pointer">
            <FontAwesomeIcon icon={faCartShopping} />
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
