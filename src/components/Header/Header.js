import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route,Link,Outlet} from "react-router-dom";
import { Fragment, useState } from "react";
const Header = ({ fixed }) =>{
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return(
    <header className="w-full h-10">
<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-zinc-800 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <h3 class=" text-5xl text-gray-300 ">شيشة</h3>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1  border-2 border-zinc-800 bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i class="bi bi-list text-4xl"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-2xl">
              <li className="nav-item">
              <Link to="/"className="d-flex align-items-center mb-2 mb-lg-0 text-gray-300 text-decoration-none mr-5 mt-4 hover:text-gray-300 active:text-amber-600">Home</Link>
              </li>
              <li className="nav-item">
              <Link to="/features"className="d-flex align-items-center mb-2 mb-lg-0 text-gray-300 text-decoration-none mr-5 mt-4 hover:text-gray-300 active:text-amber-600">Catalog</Link>
              </li>
              <li className="nav-item">
              <Link to="/pricing"className="d-flex align-items-center mb-2 mb-lg-0 text-gray-300 text-decoration-none mr-5 mt-4 hover:text-gray-300 active:text-amber-600">Boxes</Link>
              </li>
              <li className="nav-item">
              <Link to="/fAQs" className="d-flex align-items-center mb-2 mb-lg-0 text-gray-300 text-decoration-none mr-5 mt-4 hover:text-gray-300 active:text-amber-600">FAQs</Link>
              </li>
              <li className="nav-item">
              <Link to="/about" className="d-flex align-items-center mr-40 mb-2 mb-lg-0 text-gray-300 text-decoration-none mr-5 mt-4 hover:text-gray-300 active:text-amber-600">About</Link>
              </li>
              <li className="nav-item">
              <Link to="/cart"className="d-flex align-items-center mb-2 mr-10 mb-lg-0 text-gray-300 text-decoration-none  mt-4"><i class="bi bi-basket2 text-3xl text-gray-300"></i></Link>
              </li>
              <li className="nav-item">
              <Link to="/login"className="d-flex align-items-center mb-2  mb-lg-0 text-gray-300 text-decoration-none mt-4"><i class="bi bi-box-arrow-right text-3xl text-gray-300  hover:text-gray-300"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <Outlet/>
</header>
);


};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
