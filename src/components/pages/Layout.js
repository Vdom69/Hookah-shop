/*import { useEffect, useReducer,useState } from "react";
import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
 
  return (
       <div>

      <button ><i class="bi bi-box-arrow-right text-amber-600 text-3"></i></button>
    </div>);
};

export default Layout;
*/

import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
  const user=localStorage.getItem('user')
  if(user){
    return true
  } else {
    return false
  }
}

const  Layout=(props:any) =>{

  const auth=useAuth()

  return auth?<Navigate to="/dashboard"/>: <Outlet/>
}

export default Layout;