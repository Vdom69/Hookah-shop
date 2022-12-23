import React, { useState,useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet, Link } from "react-router-dom";
import dats from "../../data/dats.js";
const  MATERIAL = {
  COCONUT: 'coconut',
  NUT: "nut",
  WALNUT: "walnut",

}
const BRANDS = {
  PANDA: 'Panda',
  THEWHITE: 'The WHITE',
  WUGIL: 'Wugil'
}

const SHAPES = {
  CIRCLE: 'circle',
  SQUARE: 'square',
}
const Chsrcoal = ({ state, dispatch }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { products, cart } = state;
  const [material, setMaterial] = useState([]);
  const [brand, setBrand] = useState([]);
  const [shape, setShape] = useState([]);
  const productList = [
    {
      "id": 16,
      "material": "coconut",
      "price": 379,
      "brand": "Panda",
      "shape": "square",
      "name": "Panda",
      "image": 'https://daza.com.ua/storage/product-preview/app-product/558/orgigin/panda-coco-charcoal-ugol-dlia-kaliana-cube-xl-72-kub-chernaia-korobka.jpg?t=1604480519'
    },
    {
      "id": 17,
      "material": "nut",
      "price": 482,
      "brand": "The WHITE",
      "name": "The WHITE",
      "shape": "square",
      "image":"https://content2.rozetka.com.ua/goods/images/big/245451460.jpg"
    },
    {
      "id": 18,
      "material": "walnut",
      "price": 283,
      "brand": "Wugil",
      "name": "Wugil",
      "shape": "triangle",
      "image":"https://assets.dragonmart.ae//pictures/0350165_wugil-shisha-walnut-shell-charcoal-pack-of-80-cubes.jpeg"
  }
  ];
  const handleFilterByMaterial= (event) => {
    const { value } = event.target
    if (material.includes(value)) {
      return setMaterial(material.filter((_material) => _material !== value))
    }
    setMaterial([...material, value])
  }
  const handleFilterByBrand = (event) => {
    const { value } = event.target
    if (brand.includes(value)) {
      return setBrand(brand.filter((_brand) => _brand !== value))
    }
    setBrand([...brand, value])
  }

   const handleFilterByShape = (event) => {
    const { value } = event.target
    if (shape.includes(value)) {
      return setShape(shape.filter((_shape) => _shape !== value))
    }
    setShape([...shape, value])
  }

  const productsy = () => {
    const withFilterByBrand = brand.length > 0 ? productList.filter((productf) => brand.includes(productf.brand)) : productList
    const withFilterByShape = shape.length > 0 ? productList.filter((productf) => shape.includes(productf.shape)) : withFilterByBrand
    const withFilterByMaterial = material.length > 0 ? productList.filter((productf) => material.includes(productf.material)) : withFilterByShape
    return withFilterByMaterial
  }
return(

<div className='Chsrcoal mt-20 d-flex align-items-start flex-column mb-3'>
<>
<div class="d-flex mx-auto mt-3">
      <button class="mt-3 w-10 h-10 border-zinc-800 border-2 rounded-lg" onClick={handleShow}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nO3YSw6CMBSF4X8fitHuXAawAXEBdi+ibgJjchMNYSCP2xRyvuROOijcPsgJICIiGxOAGnhZ1Ta2KifgAXS9aoEjK1Lai1+AnVVjY2fvh8eBFZxb+5/5Dw7zx1SNFM6N3FIdrcZ25dPQNdXRWvqytwMreF/bZcc+tRXwtKqsQRERyVJQat5aao4Ooc47NcfcGyn+bMQ9/U5VKjVnKCg1i4j0KZnmpFwimaYQF06mKSrOacT7f243oialXyXTHAUlUxER4esNlJFPhidtdXQAAAAASUVORK5CYII="/>
      </button>
      <Link to="/hookahs"><button className="ml-10 mt-3 w-10 h-10 px-1 border-zinc-800 border-2 rounded-lg"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAEADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAUGBwEDBAII/8QAMhAAAgEEAQIDBQYHAAAAAAAAAQIDAAQFERIGIRMxQQciUWGBCBQVI2JxFjNCUoORof/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC8aKKKAqIe0vqHM9M4e2vsHbWdy73SQSR3O/6+ykEMPXQ+vyqX1T/tivs5jrGBc22KnxUl4Ht2jspS6unvKH/N1sjfl56PlQW7D4ohj8coZeI5lAQpbXfW/Tde6SdNfxE8LS9RyY7bqpjis4HRk33PMs7d/TQ/3TugKKKKArXcTw20ElxcyxwwxKXkkkYKqKO5JJ7AfOtlR68UZjqlMfMOVljYI7qWMj3ZZnZhHv4hBGza+LIfNRQbcf1dg8jmPwm0vGa+MRmWN7eROSDXvKWUBh37EE776qP+2FMrJgMcMMtuZPxW2343ly5gJ9OZXfy+tSfPdP2GdgC3aNHPGQ0F3AeE0DjfFkb0I2e3cdzsGq39qDX1xhrHF9Ry29tNFlIGgvfvJiiuYeXBnOhpZByDMPJQSVJ0RQW4u+I5a3rvqs1xYi9bIWKXJtZ7ZWJ8NZ9cmTfutrexsaOjojfcV20BRRRQFJcVpeo84hP5jGCTX6CnEf8AUanVIMw64fMw5qX3bKWEWt9JrtEAxaKRj6IpZwT6eICdAE0D+qe+0VGZ7DDRS3dpbQGWRuU0bliwA0AVVtDRPb17fCrgBBAIOwfIiqS+0jmrRoMZgkUNeLJ97dtfy00ygb/UdnX6R8qC4sM8smHsZJzGZWt4y5iXihYqN8R6DfkK7KVdK5q06h6escpjwFgniBCa14ZHZl+hBH0prQFFFFAVggEEEAg+YNZooFMfTeHij8KKxSOD0gRmWIfsgPED6VRvtW6B6iuuqpJsNgIzjBGqWwx8aqoHcnko8m5FtnXevoil+Xx1xkFjW3y99juO9m0ER571580by+WvOgg/sp6MkselYYuqMLYxX8cjiCQIv3hYieQDOO4PItoA9hr1qWvishYJywmRlcKO1pkZGmjf/IdyKT5bJYD+00ny3RuYvLUxW3W+agcyo/NhH2A3sDw1Q9/318jTSTpeK6XjlctlsgnqktyIUYfBlhCBh8iCKBhg8nHmMXDfRRtGHLKyMQSrKxVhsdjplPcdj5iu+tdvBDbQR29tEkMMShI441CqijsAAOwA+FbKD//Z"alt="hookahimage"/></button></Link>
      <Link to="/shisha"><button className="ml-10 mt-3 w-10 h-10 px-1 border-zinc-800 border-2 rounded-lg"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAEADASIAAhEBAxEB/8QAGgAAAwADAQAAAAAAAAAAAAAAAAYHAgMEBf/EADIQAAEDAwMDAgUDAwUAAAAAAAECAwUEBhEAEiEHMUETURQiQmFxMoGhFieRM4KTstH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AuOjRo0Bo0awfebp2XHnlBDbaStaj2AAyToJp1FVU3bdkbY0bVuUzTaDXyVQ0fmbSn/THf3wce6kHxruse6JGkl12beKgJlhO6kq/prmucKB8qwD+cHPIOuPpY4p2IuC+a5pa3pSodeQlPKgw1kJQPvkKH7DXbOR9L1NsihmYjdSyTeaiOfUQFsupVgpKh4Kk4z7gHxoH/RpX6d3Qbpt5L9S36MlSrNPXMEbSh1PfjwD3+3I8aaNAaNGjQGlHqzXGO6dTjye66f0P+RQQf4UdN2kXra0t3ppLbASUFlRAHgOoz/7oPYthugi7ehbffqadNUqPQkU5WAt3CBvUE9yM5OkrplclBa3TOoXNv+k3FSD1GoAZUte7dtSPJ+Y/4J8HTNcdqRV6QcdUqeNJXIaQ5QSDBw40ogKTjkZHnGfwQedTSwLVdN6TgvCRbcYgKj455sqwy684Cr1lZAGAE5Pbx4yCDhuTbfVyjqacFuOuulO9BG3FQgZCikjIOCB+Vqzqmal/UmUoJeLsyciX01DJn6f0HQkjIyrPBAI5RjB9tVDQGpLTy3UG4rnnIail4qIXGPY2Gm3uLbJJQsbgoEFOPbuOBnVa1N+pDL9sz8bfke0paKfFJKtN93KdR4V+Qf52+BoMzbnUsDIvul3exjGsf9dcU5GdUXoetj6hdvy9NUsqaUkBTTpBGMj9KQfbkjTHdVFPy7MfNWTPIZW23vRTujdT1iFYPPHfHY/fgp76XarqE7VRUlb88w9bVzLpHE06lr2tOObTtLbvjJHfP4JOgWkyNG5bEbZ/USnk4GQoVD4CV2H00qTwghQ4OAQD3HGcpPI8ymty5JfqA/AS8q0piTpmaisraZQPxtK3gIUk+5wB+Rnkd6ZAT0VNdJ6aVupCamjRT7K312/VKloVsKiBk5JAOfGc8ank1GOdMbhjbthFuSNuvMOIpUKcJ9L1EKUlsk/QVK3g9++eeVA43UwxI35aNoxTaW6SJUJCpQ2OGkN49NJ/OMf7xqn6TOnFrVUNTVcvPL9a4JZfrVi924Nj6W0ntgZ8ceBkAac9Aa1VdMxWUr1LVNJdYeQW3G1jIUkjBB/bW3RoJXASD3TOcFszrpNuVbilRMi4eGCTktOHsO/f357E7d922Vd951NRSSsxEUsMHiqlQxSes6E5+UkqAKVYxnarnJ8afpyHj56NdjpWmRUUro+ZCvB8EHuCPcan7Efe1gD0YdP9T2+gYbpXVhFVTpHhJ+odhwD9kp0CRP8A9vYiQhYu546aiqtC2KqNWoCoYcUnaVJ25wQRnB7ex76arCkYy+OlxtSprGDKN0i2PQWcKTtJ9JYB/UAAjOPbxrGlvKwYuqcqpC0KuJrlrK1qqosb955O08kfxrzrwlIu+SlVuWbN1Eukj4eUbb+FDahylRc5yBj6sfYjvoHzpDMuTVhx66lRNTS7qR7PfKDgZ++3aT+dOekjpJa8patu1FPNvNrq6qqVUrShZXsKkpBCleVfLzj/ACdO+g//2Q=="alt="hookahimage"/></button></Link>
      <Link to="/accessories"><button className="ml-10 mt-3 w-10 h-10 px-1 border-zinc-800 border-2 rounded-lg"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAEADASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAYFAwf/xAA1EAABAwQBAwEDCQkAAAAAAAABAAIDBAUGESESMVETB3GBFBUiMkFCcoKRFiMmM1Jhg6Gx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APcERZ7Lg11+mtmz1R0kdRrp405729/y9kGgiLHvzcjLf4ektLT09q+OQ8/kIQbCKM+ec3tbGvu+N0VxiH8ySz1R62jyI5AC73Arbx3JrVkUcht059eE6npZmmOaA+HsPI9/ZBsIiICnYbhv2hVVt9PgWiKbr/yyDX/FRKFp71Su9sVXbv3fqG0RxB/WNl7HukLNeemTeu/0SeyC6REQFLZjjD7iWXixubSZFRjqpqkDQmA7xSf1Md257b35BqUQZGKXyLI7BSXSKN0TpWkSwu3uKRp6XsO+eHAha6jsJDaTJcytkXEcVxjqWjwZomvdr4glWKAoWtpKSh9sNrrHQxNfcrXPE13SAXzRua4u/F6fG++hrsrpTOeWasulsgq7OWi72ucVdF1HQkcPrRn+zmkj9EFMixcWyShya3fKaMmOaM9FTSycS00g7se3uCCD71tICIpTLcqdRyix481tbkdSNQwNO20w+2WU/daN70eSdBBxwktq8lzG5x8xy3GOmB8mGJrHf7JHwVisnFbHFjlhpLXFI6UxNJlmf9aWRx6nvO/LiStZAREQTl+wy2XitFyjfU226tGhcLfL6UpHHDvseOAPpA8cLN/ZzNYnuFPnnVF91tRaInOaPxAjf6K1RBFDDb7Ws6L7nF1qIyeWUMMdH1DwS0E6+KoLBjtpx2mdBZ6KOnDzuR/LnyHy5x2Xdz3K1UQEREH/2Q=="alt="hookahimage"/></button></Link>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <div class="text-2xl py-3">Filters</div>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='filter w-44 text-left ml-20'>
            <div>
              <div class="text-xl">Brands:</div>
              <div>
                <div>
                <input class="accent-amber-600" id={BRANDS.PANDA} type="checkbox" checked={brand.includes(BRANDS.PANDA)} value={BRANDS.PANDA} onChange={handleFilterByBrand} />
                <label class="pl-2 text-lg" htmlFor={BRANDS.PANDA}>{BRANDS.PANDA}</label>
              </div>
              <div>
                <input class="accent-amber-600" id={BRANDS.THEWHITE} type="checkbox" checked={brand.includes(BRANDS.KARMA)} value={BRANDS.THEWHITE} onChange={handleFilterByBrand} />
                <label class="pl-2 text-lg" htmlFor={BRANDS.THEWHITE}>{BRANDS.THEWHITE}</label>
              </div>
              <div>
                <input class="accent-amber-600" id={BRANDS.WUGIL} type="checkbox" checked={brand.includes(BRANDS.WUGIL)} value={BRANDS.WUGIL} onChange={handleFilterByBrand} />
                <label class="pl-2 text-lg" htmlFor={BRANDS.WUGIL}>{BRANDS.WUGIL}</label>
              </div>
              </div>
            </div>
            <div>
              <div class="text-xl mt-3">Forms:</div>
              <div>
                <div>
                <input class="accent-amber-600" id={SHAPES.CIRCLE} type="checkbox" checked={shape.includes(SHAPES.CIRCLE)} value={SHAPES.CIRCLE} onChange={handleFilterByShape} />
                <label class="pl-2 text-lg" htmlFor={SHAPES.CIRCLE}>{SHAPES.CIRCLE}</label>
              </div>
              <div>
                <input class="accent-amber-600" id={SHAPES.SQUARE} type="checkbox" checked={shape.includes(SHAPES.SQUARE)} value={SHAPES.SQUARE} onChange={handleFilterByShape} />
                <label class="pl-2 text-lg" htmlFor={SHAPES.SQUARE}>{SHAPES.SQUARE}</label>
              </div>
              </div>
            </div>
            <div class="text-xl mt-3">Material:</div>
            <div>
              <div>
              <input class="accent-amber-600" id={MATERIAL.WALNUT} type="checkbox" checked={material.includes(MATERIAL.WALNUT)} value={MATERIAL.WALNUT} onChange={handleFilterByMaterial} />
              <label class="pl-2 text-lg"htmlFor={MATERIAL.WALNUT}>{MATERIAL.WALNUT}</label>
            </div>
            <div>
              <input class="accent-amber-600" id={MATERIAL.NUT} type="checkbox" checked={material.includes(MATERIAL.NUT)} value={MATERIAL.NUT} onChange={handleFilterByMaterial} />
              <label class="pl-2 text-lg"htmlFor={MATERIAL.NUT}>{MATERIAL.NUT}</label>
            </div>
            <div>
              <input class="accent-amber-600" id={MATERIAL.COCONUT} type="checkbox" checked={material.includes(MATERIAL.COCONUT)} value={MATERIAL.COCONUT} onChange={handleFilterByMaterial} />
              <label class="pl-2 text-lg"htmlFor={MATERIAL.COCONUT}>{MATERIAL.COCONUT}</label>
              </div>
            </div>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
        <div class="container text-center">
      <div class="">
        <div class="w-full grid gap-y-4 row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 mx-auto">

{
              productsy().map(product => {
                return (
                  <div class="col-sm-8">
                  <div class="col pb-3 border border-black rounded-3xl p-2 mt-1" key={product.id}>
               <img className="img w-full h-64"src={product.image}/>
        <div class="card-body">
          <p class="card-text text-left pl-2 mt-4 text-2xl">{product.name}</p>
          <p class="card-text text-left pl-2">{product.brand}</p>
          <p class="card-text text-left pl-2">{product.weight}</p>
          <p class="card-text text-left pl-2">{product.strength}</p>
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

Chsrcoal.propTypes = {};

Chsrcoal.defaultProps = {};

export default Chsrcoal;
