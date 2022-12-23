import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter, Routes, Route,Link,Outlet} from "react-router-dom";
const Cart = ({ state, dispatch }) => {
  const [show, setShow] = useState(false);
  const { cart } = state;
  const [total, setTotal] = useState(0);
  console.log("Cart:", cart);

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty
      }
    });
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div class="w-full mt-20">
      <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
      <br/>
     
      {cart.length > 0 ? (
        cart.map((product) => (
          <div
            key={product.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 10,
              border: "1px solid grey",
              margin: 5
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              <img className="w-32 h-32"src={product.image} />
              <div
               
              >
                 <p class="text-2xl">{product.name}</p>
                <p class="text-2xl">$ {product.price}</p>
               
              </div>
            </div>
            <div className="mt-4 text-3xl mr-10">
              <button className="mr-3" onClick={() => changeQty(product.id, product.qty - 1)}>
                -
              </button>
              <span>{product.qty}</span>
              <button className="ml-3" onClick={() => changeQty(product.id, product.qty + 1)}>
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <span style={{ alignSelf: "center", padding: 20, color: "#666" }}>
          Cart is empty!
        </span>
        
      )}
      <p class="text-3xl text-right mr-3 text-neutral-500">Subtotal: ${total}</p>
      <button class="w-60 h-16 border-none rounded-xl bg-amber-600 text-3xl mb-3" onClick={() => setShow(true)}>Order now</button>
      <>
      <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header >
            <Modal.Title id="example-custom-modal-styling-title">
            Checkout
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div class="flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
    <form class="mt-8 space-y-6" action="#">
      <input type="hidden" name="remember" value="true"/>
      <div class="-space-y-px rounded-md shadow-sm">
        <div class='py-3'>
          <label class="sr-only">Name</label>
          <input class="relative block w-full appearance-none rounded-none rounded-t-md border px-3 py-2 text-gray-900 placeholder-gray-500" placeholder="Name"/>
        </div>
        <div class='py-3'>
          <label class="sr-only">Surname</label>
          <input class="relative block w-full appearance-none rounded-none rounded-t-md border px-3 py-2 text-gray-900 placeholder-gray-500" placeholder="Surname"/>
        </div>
        <div class='py-3'>
          <label class="sr-only">Phone</label>
          <input class="relative block w-full appearance-none rounded-none rounded-t-md border px-3 py-2 text-gray-900 placeholder-gray-500" placeholder="Phone"/>
        </div>
        <div class='py-3'>
          <label class="sr-only">City</label>
          <input class="relative block w-full appearance-none rounded-none rounded-t-md border  px-3 py-2 text-gray-900 placeholder-gray-500" placeholder="City"/>
        </div>
        <div class='py-3'>
          <label class="sr-only">Full address</label>
          <input class="relative block w-full appearance-none rounded-none rounded-t-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10" placeholder="Full address"/>
        </div>
       
      </div>
      <div><Link to="/" class="text-decoration-none">
        <button closeButton type="submit" class="group relative flex w-full justify-center rounded-xl border border-none bg-zinc-800 py-3 text-2xl w-64 mx-auto px-4  font-medium text-amber-600">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          </span>
          Order Confirmed
        </button>
        </Link>
      </div>
    </form>
  </div>
</div>
          </Modal.Body>
        </Modal>
      </>
      <br/>
      <Link to="/features"class="text-xl text-right mr-3 text-neutral-500 text-decoration-none mt-5">continue shopping <i class="bi bi-bag-check-fill"></i></Link>
    </div>
  );
};

export default Cart;
