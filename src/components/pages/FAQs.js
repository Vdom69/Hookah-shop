
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Outlet, Link } from "react-router-dom";

const FAQs = () => {
    const [show, setShow] = useState(false);

    return (
      <>
      <div class="w-full h-96 mt-10 py-1">
      <h1 class="text-6xl mt-24">Write to us </h1>
      <h2 class="text-zinc-500">and maybe we'll see your message someday <i class="bi bi-emoji-wink"></i></h2>
      <textarea class="resize-none rounded-md w-96 h-32 border-2 border-amber-600 mt-10"></textarea><br></br>
      <button class="cursor-pointer w-60 h-14 text-center border-2 rounded-xl text-2xl text-white p-2 mx-auto mt-4 bg-zinc-800 hover:bg-amber-600 " onClick={() => setShow(true)}>
        Send Message
        </button>
        </div> 
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            <p class="pl-20 text-2xl">Thank you for your comment</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body class="py-5">
          <img class="w-80 h-80 mx-auto border-none rounded-2xl" src="https://media.tenor.com/WEHqCvjqursAAAAC/happy-excited.gif"/>
          </Modal.Body>
        </Modal>
      </>
   
    );
};
export default FAQs;


     

