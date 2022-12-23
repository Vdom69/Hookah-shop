
import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, Link } from "react-router-dom";
const Pricing = ({ state, dispatch }) => {
  const { products, cart } = state;
  const productList = [
    {
      "id": 1,
      "name":"Standart Box",
      "hookahs": "Japona",
      "shisha": "Arawak",
      "chsrcoal" : "Panda",
      "price": 3450,
      "image":"https://ae01.alicdn.com/kf/Haf1065df03304895a3f4b1e9f39b33b1I.jpg?width=1000&height=1000&hash=2000"
    },
    {
      "id": 2,
      "name":"Pro Box",
      "hookahs": "Japona/Led Light",
      "shisha": "Fumari",
      "chsrcoal": "Wugil",
      "price": 6730,
      "image":"https://cdn.shopify.com/s/files/1/0590/2611/2674/products/hookahsetshisha4_345x345@2x.jpg?v=1630312644"
    
    },
    {
      "id": 3,
      "name":"Expert Box",
      "hookahs": "Nanosmoke",
      "shisha": "Endorphin",
      "chsrcoal": "The White",
      "price": 10730,
      "image":"https://m.media-amazon.com/images/I/41VzphesVDL._AC_.jpg"
    }
  ];
  const productsy = () => {
    return productList
  }
  return (
    <div class="container text-center mt-20">
    <h1 class="text-zinc-800  py-2 font-bold">Fucking awesome offer <i class="bi bi-emoji-sunglasses font-bold"></i></h1>
    <div class="w-full grid gap-y-4 row row-cols-1 row-cols-sm-2 row-cols-md-3  mx-auto">
{productsy().map(product => {
                return (
                  <div class="">
                  <div key={product.id}>
            <div class=" ">
                  <div class="w-full h-96 bg-zinc-800 border-none rounded-3xl text-amber-600 mt-3 py-3">
                    <small class="text-2xl font-medium">{product.name}</small>
                    <h1 class="text-5xl font-bold border-b border-white pb-3 mt-2">{product.price}$</h1>
                    <h3 class="text-2xl border-b border-white pb-3">1. Hookahs <b>{product.hookahs}</b></h3>
                    <h3 class="text-2xl border-b border-white pb-3">2. Shisha <b>{product.shisha}</b></h3>
                    <h3 class="text-2xl border-b border-white pb-3">3. Chsrcoal <b>{product.chsrcoal}</b></h3>
                  {cart.some((p) => p.id === product.id) ? (
                        <button type="button"className="w-32 h-12 border-2 border-amber-600 m-3 pb-4 rounded-lg bg-amber-600  text-zinc-800  mx-auto text-center text-xl mt-2 cursor-pointer" onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product
                            })
                          }
                        >
                          <i class="bi bi-trash3 text-4xl text-zinc-800"></i>
                        </button>
                      ) : (
                        <button type="button"className="w-32 h-12 border-2 border-amber-600  rounded-lg bg-amber-600  text-zinc-800  mx-auto text-center text-xl mt-2 cursor-pointer" onClick={() =>
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
                        BUY NOW
                        </button>
                      )}    
                  </div>   </div>    </div>
      </div>)
      
    })
    }
  </div>
</div>);
};

Pricing.propTypes = {};

Pricing.defaultProps = {};

export default Pricing;
