import React, { useState,useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './Catalog.scss';
import dats from "../../data/dats.js";
const Catalog = ({ state, dispatch }) => {
  const { products, cart } = state;
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    getUsers(dats);
  }, []);

  //Simulating making api call with useEffect
  const getUsers = dats => {
    setUsers(dats);
  };

  const bySearch = (user, search) => {
    if (search) {
      return user.name.toLowerCase().includes(search.toLowerCase());
    } else return user;
  };

  const filteredList = (users,search) => {
    return users
      .filter(user => bySearch(user, search));
  };
return(

<div className='Catalog mt-20 d-flex align-items-start flex-column mb-3'>
        <div className='filter h-10 w-80 text-left border-2 rounded-xl mx-auto mt-5 py-2'>
        <div class="relative">
        <div class="absolute pointer-events-auto ...">
  </div>
  <div className="Appy w-full">
  <i class="bi bi-search text-lg text-gray-600 px-3"></i>
      <input className=' outline-none font-bold border-none'
        onChange={e => setSearch(e.target.value)}
      />
    
    </div>
</div>
        </div>
        <div class="container text-center">
        <div class="">
<div class="w-full grid gap-y-4 row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 mx-auto">
{
              
   filteredList(users, search).map(product => {
                return (
                  <div class="col-sm-8">
                  <div class="pb-3 border border-black rounded-3xl p-3 mt-1 " key={product.id}>
               <img className="img w-full h-80"src={product.image}/>
        <div class="card-body">
          <p class="card-text text-left pl-2 mt-4 text-2xl">{product.name}</p>
          <p class="card-text text-left pl-2">{product.material}</p>
          <p class="card-text text-left pl-2">{product.accessories}</p>
          <p class="card-text text-left pl-2">{product.shape}</p>
          <p class="card-text text-left pl-2">{product.strength}</p>
          <p class="card-text text-left pl-2">{product.weight}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3 px-3">
        <div class="flex justify-content-between">  
      {cart.some((p) => p.id === product.id) ? (
         <button type="button"className="btn btn-sm btn-outline-secondary border-2 border-white bg-white" onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: product
            })
          }
        >
          <i class="bi bi-trash3 text-4xl text-amber-600"></i>
        </button>
      ) : (
        <button type="button"className="btn btn-sm btn-outline-secondary border-2 border-white bg-white" onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: {
                id: product.id,
                image:product.image,
                name:product.name,
                qty: 1,
                price: product.price,
              }
            })
          }
        >
         <i class="bi bi-cart-plus text-neutral-500 text-4xl hover:text-neutral-500"></i>
        </button>
      )}
     
     <div className='productsbutton'>
      <button type="button"className="btn btn-sm btn-outline-secondary border-2 border-white  bg-white">
          <Link to={`/products/${product.id}`}> <i class="bi bi-eye text-neutral-500 text-4xl hover:text-neutral-500"></i></Link>
      </button>
    </div>
    <>
      {products}
    </>

      </div>  
       <p class="card-text text-neutral-500 text-2xl">{product.price}</p>
          </div>
          </div>                       
      </div>)
      
    })
    }
  </div>
</div>
  </div>
  </div>
  
  )
};

Catalog.propTypes = {};

Catalog.defaultProps = {};

export default Catalog;
