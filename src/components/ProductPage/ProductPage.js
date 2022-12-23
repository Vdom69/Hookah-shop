import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dats from "../../data/dats.js";
import { Link } from "react-router-dom";
const ProductPage = (props) => {
  let { id } = useParams();

    const [product, setProduct] = useState('');

    useEffect(() => {
        getProduct();
    }, [id])

    const getProduct = () => {
        const selectProduct = dats.find(item => +item.id === +id);
        console.log('selectProduct', selectProduct);
        setProduct(selectProduct);
    };

        return (
        <div className="container text-center mx-10 mt-14">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                    <div className='w-full mt-5'>
                        <img className="img w-96 h-96"src={product.image}/>
                    </div>
                    <div className='w-full h-96 text-left text-2xl mt-5'>
                       <div>
                        <h1 class="font-bold">{product.name}</h1>
                        <p class="mt-3">{product.aboutproducts}</p>
        <Link to="/features" class="text-decoration-none text-amber-800 hover:text-amber-800 "><div class="mt-5 border-none border rounded-xl bg-zinc-800 px-3 w-72 py-3 text-2xl text-center">Return to catalog <i class="bi bi-arrow-right p-2"></i></div></Link>
                       </div>
                    </div>
                    </div>
            </div>
            
        )
  }
    ProductPage.propTypes = {};

    ProductPage.defaultProps = {};

export default ProductPage;