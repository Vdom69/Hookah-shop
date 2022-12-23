import React, { useState,useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import dats from "../../data/dats.js";
const  STRENGTH = {
  STRONG: 'strong',
  MEDIUM: "medium",
  LIGHT: "light",

}
const BRANDS = {
  FUMARI: 'Fumari',
  ENDORPHIN: 'Endorphin',
  ARAWAK: 'Arawak'
}

const WEIGHT = {
  FIFTY: '50g',
  HUNDRED: '100g',
  THREEHUNDRED: '300g'
}
const Shisha = ({ state, dispatch }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { products, cart } = state;
  const [strength, setStrength] = useState([]);
  const [brand, setBrand] = useState([]);
  const [weight, setWeight] = useState([]);
  const productList = [
    {
      "id": 7,
      "name": "Island Papaya",
      "strength": "medium",
      "price": 500,
      "brand": "Fumari",
      "weight": "100g",
      "image": 'https://smoky.in.ua/wp-content/uploads/2017/10/Fumari-Island-Papaya.png'
    },
    {
      "id": 8,
      "name": "Double Apple",
      "strength": "medium",
      "price": 500,
      "brand": "Fumari",
      "weight": "100g",
      "image":"https://smoky.in.ua/wp-content/uploads/2019/11/tabak-fumari-double-apple.png"
    },
    {
      "id": 9,
      "name": "Lemon mint",
      "strength": "medium",
      "price": 500,
      "brand": "Fumari",
      "weight": "100g",
      "image":"https://smoky.in.ua/wp-content/uploads/2017/10/Fumari-Lemon-mint.png"
  },
    {
      "id": 10,
      "name": "Mexican Carnaval",
      "strength": "light",
      "price": 150,
      "brand": "Arawak",
      "weight": "50g",
      "image":"https://mirk.com.ua/image/cache/catalog//Tabak/Arawak/Arawak%20light/604804911-tyutyun-arawak-mexican-carnaval-ananas-kaktus-40-g-400x400.jpg"
  },
    {
      "id": 11,
      "name": "Mint",
      "strength": "light",
      "price": 150,
      "brand": "Arawak",
      "weight": "50g",
      "image":"https://mirk.com.ua/image/cache/catalog//Tabak/Arawak/Arawak%20light/722278041-tyutyun-arawak-mint-myata-40-g-400x400.jpg"
  },
    {
      "id": 12,
      "name": "Citrus Mate",
      "strength": "light",
      "price": 150,
      "brand": "Arawak",
      "weight": "50g",
      "image":"https://mirk.com.ua/image/catalog//Tabak/Arawak/Arawak%20light/434176055-tyutyun-arawak-citrus-mate-miks-tsitrusovih-40-g.jpg"
    },
    {
        "id": 13,
        "name": "Mexican Carnaval",
        "strength": "strong",
        "price": 800,
        "brand": "Endorphin",
         "weight": "300g",
        "image":"https://store.belgorod-pitersmoke.ru/wa-data/public/shop/products/04/webp/86/19/11986/images/18720/18720.750.webp"
    },
      {
        "id": 14,
        "name": "Blueberry ",
        "strength": "strong",
        "price": 800,
        "brand": "Endorphin",
        "weight": "300g",
        "image":"https://store.belgorod-pitersmoke.ru/wa-data/public/shop/products/04/webp/69/19/11969/images/18732/18732.750.webp"
    },
      {
        "id": 15,
        "name":"PeacPineapple",
        "strength":"strong",
        "price": 800,
        "brand": "Endorphin",
        "weight": "300g",
        "image":"https://store.belgorod-pitersmoke.ru/wa-data/public/shop/products/04/webp/77/19/11977/images/18723/18723.750.webp"
      }
  ];
  const handleFilterByStrength= (event) => {
    const { value } = event.target
    if (strength.includes(value)) {
      return setStrength(strength.filter((_strength) => _strength !== value))
    }
    setStrength([...strength, value])
  }
  const handleFilterByBrand = (event) => {
    const { value } = event.target
    if (brand.includes(value)) {
      return setBrand(brand.filter((_brand) => _brand !== value))
    }
    setBrand([...brand, value])
  }

   const handleFilterByWeight = (event) => {
    const { value } = event.target
    if (weight.includes(value)) {
      return setWeight(weight.filter((_weight) => _weight !== value))
    }
    setWeight([...weight, value])
  }

  const productsy = () => {
    const withFilterByBrand = brand.length > 0 ? productList.filter((productf) => brand.includes(productf.brand)) : productList
    const withFilterByWeight = weight.length > 0 ? productList.filter((productf) => weight.includes(productf.weight)) : withFilterByBrand
    const withFilterByStrength = strength.length > 0 ? productList.filter((productf) => strength.includes(productf.strength)) : withFilterByWeight
    return withFilterByStrength
  }
return(

<div className='Hookas mt-20 d-flex align-items-start flex-column mb-3'>
<>
<div class="d-flex mx-auto mt-3">
      <button class=" mt-3 w-10 h-10 border-zinc-800 border-2 rounded-lg" onClick={handleShow}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nO3YSw6CMBSF4X8fitHuXAawAXEBdi+ibgJjchMNYSCP2xRyvuROOijcPsgJICIiGxOAGnhZ1Ta2KifgAXS9aoEjK1Lai1+AnVVjY2fvh8eBFZxb+5/5Dw7zx1SNFM6N3FIdrcZ25dPQNdXRWvqytwMreF/bZcc+tRXwtKqsQRERyVJQat5aao4Ooc47NcfcGyn+bMQ9/U5VKjVnKCg1i4j0KZnmpFwimaYQF06mKSrOacT7f243oialXyXTHAUlUxER4esNlJFPhidtdXQAAAAASUVORK5CYII="/>
      </button>
      <Link to="/hookahs"><button className="ml-10 mt-3 w-10 h-10 px-1 border-zinc-800 border-2 rounded-lg"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAEADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAUGBwEDBAII/8QAMhAAAgEEAQIDBQYHAAAAAAAAAQIDAAQFERIGIRMxQQciUWGBCBQVI2JxFjNCUoORof/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC8aKKKAqIe0vqHM9M4e2vsHbWdy73SQSR3O/6+ykEMPXQ+vyqX1T/tivs5jrGBc22KnxUl4Ht2jspS6unvKH/N1sjfl56PlQW7D4ohj8coZeI5lAQpbXfW/Tde6SdNfxE8LS9RyY7bqpjis4HRk33PMs7d/TQ/3TugKKKKArXcTw20ElxcyxwwxKXkkkYKqKO5JJ7AfOtlR68UZjqlMfMOVljYI7qWMj3ZZnZhHv4hBGza+LIfNRQbcf1dg8jmPwm0vGa+MRmWN7eROSDXvKWUBh37EE776qP+2FMrJgMcMMtuZPxW2343ly5gJ9OZXfy+tSfPdP2GdgC3aNHPGQ0F3AeE0DjfFkb0I2e3cdzsGq39qDX1xhrHF9Ry29tNFlIGgvfvJiiuYeXBnOhpZByDMPJQSVJ0RQW4u+I5a3rvqs1xYi9bIWKXJtZ7ZWJ8NZ9cmTfutrexsaOjojfcV20BRRRQFJcVpeo84hP5jGCTX6CnEf8AUanVIMw64fMw5qX3bKWEWt9JrtEAxaKRj6IpZwT6eICdAE0D+qe+0VGZ7DDRS3dpbQGWRuU0bliwA0AVVtDRPb17fCrgBBAIOwfIiqS+0jmrRoMZgkUNeLJ97dtfy00ygb/UdnX6R8qC4sM8smHsZJzGZWt4y5iXihYqN8R6DfkK7KVdK5q06h6escpjwFgniBCa14ZHZl+hBH0prQFFFFAVggEEEAg+YNZooFMfTeHij8KKxSOD0gRmWIfsgPED6VRvtW6B6iuuqpJsNgIzjBGqWwx8aqoHcnko8m5FtnXevoil+Xx1xkFjW3y99juO9m0ER571580by+WvOgg/sp6MkselYYuqMLYxX8cjiCQIv3hYieQDOO4PItoA9hr1qWvishYJywmRlcKO1pkZGmjf/IdyKT5bJYD+00ny3RuYvLUxW3W+agcyo/NhH2A3sDw1Q9/318jTSTpeK6XjlctlsgnqktyIUYfBlhCBh8iCKBhg8nHmMXDfRRtGHLKyMQSrKxVhsdjplPcdj5iu+tdvBDbQR29tEkMMShI441CqijsAAOwA+FbKD//Z"alt="hookahimage"/></button></Link>
      <Link to="/accessories"><button className="ml-10 mt-3 w-10 h-10 px-1 border-zinc-800 border-2 rounded-lg"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAEADASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAYFAwf/xAA1EAABAwQBAwEDCQkAAAAAAAABAAIDBAUGESESMVETB3GBFBUiMkFCcoKRFiMmM1Jhg6Gx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APcERZ7Lg11+mtmz1R0kdRrp405729/y9kGgiLHvzcjLf4ektLT09q+OQ8/kIQbCKM+ec3tbGvu+N0VxiH8ySz1R62jyI5AC73Arbx3JrVkUcht059eE6npZmmOaA+HsPI9/ZBsIiICnYbhv2hVVt9PgWiKbr/yyDX/FRKFp71Su9sVXbv3fqG0RxB/WNl7HukLNeemTeu/0SeyC6REQFLZjjD7iWXixubSZFRjqpqkDQmA7xSf1Md257b35BqUQZGKXyLI7BSXSKN0TpWkSwu3uKRp6XsO+eHAha6jsJDaTJcytkXEcVxjqWjwZomvdr4glWKAoWtpKSh9sNrrHQxNfcrXPE13SAXzRua4u/F6fG++hrsrpTOeWasulsgq7OWi72ucVdF1HQkcPrRn+zmkj9EFMixcWyShya3fKaMmOaM9FTSycS00g7se3uCCD71tICIpTLcqdRyix481tbkdSNQwNO20w+2WU/daN70eSdBBxwktq8lzG5x8xy3GOmB8mGJrHf7JHwVisnFbHFjlhpLXFI6UxNJlmf9aWRx6nvO/LiStZAREQTl+wy2XitFyjfU226tGhcLfL6UpHHDvseOAPpA8cLN/ZzNYnuFPnnVF91tRaInOaPxAjf6K1RBFDDb7Ws6L7nF1qIyeWUMMdH1DwS0E6+KoLBjtpx2mdBZ6KOnDzuR/LnyHy5x2Xdz3K1UQEREH/2Q=="alt="hookahimage"/></button></Link>
      <Link to="/chsrcoal"><button className="ml-10 mt-3 w-10 h-10 px-1 border-zinc-800 border-2 rounded-lg"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAEADASIAAhEBAxEB/8QAHAAAAwEAAgMAAAAAAAAAAAAAAAYHBQMEAQII/8QANhAAAQMDAwEFBQUJAAAAAAAAAQIDBAAFEQYSITEHEyIyQQgUUWFxFSNCYmMWJTZSVHSBsbL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AuNFFFAVxvvtRmVvyHUNMtpKluOKCUpA6kk9BS3fdZxoU1Vqs0R69Xr+iiEYa+brh8LY+vPI4pPdcYuj0e6a0mm8W8x3piY9t5t0ZLSkg7vV5Wc9fmADkUFPt0+JdITc23SWpMV3Ox1pQUlWCQcH6gj/FdmkvseKD2fW4tY7vvZOzaOMd+5jFOlAUUUUBSbqoTrvqmBptq5v2+A9CdlSVRcJdd2rQkIC/wjxZJHPGPWnKoZ7RE+Zb7vaVQZT0dT0N5lxTSykqQVpJTkehwKAn6ts+iURI8VLLMy3zJJ+ybWvLT6DltpUl3JyoJGceI5IyE+iDDuNy1lNYtslfutjhJLyoMFO1tpsHkIRyVOKUoJSVZJUsc81haasyr5dURC460yElx95qOp8tNjqrYnxKxkdPr0zX0BA7OrTb9PxZuiX25U1t1qR7y48FJnJQ4hzuyocJBU2nBA4I59TQZ3Zben4uoWrPOBtgdjP7re+4AO/Elax3SSf5HdvHmKFceDmv0iW/RzExd5gaitTci3zH/fYr69ocZK+VNHacpWlRUdySQreTnOazLFf51m1PAskS6OX+wy3lR25khs74zgSVBAe8r3lVnHI6EjGCFOooooCoJ7Sw/eViP6Lv/SavdTrtW0PI1RKtVxYZExu3lffwA93K5CDg4SsggHjocceooJb7Pf8AH6v7J3/aavM3TaUzHLjYpKrZcHDudKE7mJB/VayAo/mG1f5scUs2eRbH1wRo2LGhzrQl1MixTEGO8QsI3ZPPi8KTuwoHPJHUN1o1BCuby4gDsW4NDLsGUnY8gfHHRSfzJJSfjQY1qgStWwGJ+o5AVEcyU2uKVJYOCR96fM708pwn4pPWup2hzIFknaRky3G4sKPc8FW3CW09ytI4HQcj6Vo6dusGz6NgSblJQw2dyU5yVLUVqwlKRypR9AASa6V2uaFvRL5qQMWexwu8Lbc3l+UVtqRgtjyjCidviUfUJxigcY0hiXHbkRXm3mHEhTbragpKwehBHBFctTTR1nuP7TC6aeiSrBple4uwZas+9qOcLQyR9yM+uRkAcYzVLoCiiigxtQ6ZteoUNmc0pElnmPMjrLb7B+KFjkfTp8qTNSyJWm4zCdboF4s6XgmNeI33MyIs9CoJIOcfjQQTjkHOKpleqkJWAFpCgCCMjPI6GgltgdZUtDWgIki8yEJKDf7wpXcR0nJKW+Bk/FKEpHIJJ5pssmjI0Sam63qW9eryOkyWBtZ+TTY8LY+nPJ5pnACRhIAHwFeaAooooP/Z"alt="hookahimage"/></button></Link>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <div class="text-2xl py-3">Filters</div>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='filter w-40 text-left ml-20'>
          <div>
            <div class="text-xl">Brands:</div>
            <div>
              <div>
              <input class="accent-amber-600" id={BRANDS.FUMARI} type="checkbox" checked={brand.includes(BRANDS.FUMARI)} value={BRANDS.FUMARI} onChange={handleFilterByBrand} />
              <label class="pl-2 text-lg" htmlFor={BRANDS.FUMARI}>{BRANDS.FUMARI}</label>
            </div>
            <div>
              <input class="accent-amber-600" id={BRANDS.ENDORPHIN} type="checkbox" checked={brand.includes(BRANDS.ENDORPHIN)} value={BRANDS.ENDORPHIN} onChange={handleFilterByBrand} />
              <label class="pl-2 text-lg" htmlFor={BRANDS.ENDORPHIN}>{BRANDS.ENDORPHIN}</label>
            </div>
            <div>
              <input class="accent-amber-600" id={BRANDS.ARAWAK} type="checkbox" checked={brand.includes(BRANDS.ARAWAK)} value={BRANDS.ARAWAK} onChange={handleFilterByBrand} />
              <label class="pl-2 text-lg" htmlFor={BRANDS.ARAWAK}>{BRANDS.ARAWAK}</label>
            </div>
            </div>
          </div>
          <div>
            <div class="text-xl mt-3">Weight:</div>
            <div>
              <div>
              <input class="accent-amber-600" id={WEIGHT.FIFTY} type="checkbox" checked={weight.includes(WEIGHT.FIFTY)} value={WEIGHT.FIFTY} onChange={handleFilterByWeight} />
              <label class="pl-2 text-lg" htmlFor={WEIGHT.FIFTY}>{WEIGHT.FIFTY}</label>
            </div>
            <div>
              <input class="accent-amber-600" id={WEIGHT.HUNDRED} type="checkbox" checked={weight.includes(WEIGHT.HUNDRED)} value={WEIGHT.HUNDRED} onChange={handleFilterByWeight} />
              <label class="pl-2 text-lg" htmlFor={WEIGHT.HUNDRED}>{WEIGHT.HUNDRED}</label>
            </div>
            <div>
              <input class="accent-amber-600" id={WEIGHT.THREEHUNDRED} type="checkbox" checked={weight.includes(WEIGHT.THREEHUNDRED)} value={WEIGHT.THREEHUNDRED} onChange={handleFilterByWeight} />
              <label class="pl-2 text-lg"htmlFor={WEIGHT.THREEHUNDRED}>{WEIGHT.THREEHUNDRED}</label>
            </div>
            </div>
          </div>
          <div class="text-xl mt-3">Strength:</div>
          <div>
            <div>
            <input class="accent-amber-600" id={STRENGTH.STRONG} type="checkbox" checked={strength.includes(STRENGTH.STRONG)} value={STRENGTH.STRONG} onChange={handleFilterByStrength} />
            <label class="pl-2 text-lg"htmlFor={STRENGTH.STRONG}>{STRENGTH.STRONG}</label>
          </div>
          <div>
            <input class="accent-amber-600" id={STRENGTH.MEDIUM} type="checkbox" checked={strength.includes(STRENGTH.MEDIUM)} value={STRENGTH.MEDIUM} onChange={handleFilterByStrength} />
            <label class="pl-2 text-lg"htmlFor={STRENGTH.MEDIUM}>{STRENGTH.MEDIUM}</label>
          </div>
          <div>
            <input class="accent-amber-600" id={STRENGTH.LIGHT} type="checkbox" checked={strength.includes(STRENGTH.LIGHT)} value={STRENGTH.LIGHT} onChange={handleFilterByStrength} />
            <label class="pl-2 text-lg"htmlFor={STRENGTH.LIGHT}>{STRENGTH.LIGHT}</label>
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
                  <div class="pb-3 border border-black rounded-3xl p-2 mt-1" key={product.id}>
               <img className="img w-full h-80"src={product.image}/>
              
        <div class="card-body">
          <p class="card-text text-left pl-2 mt-4 text-2xl">{product.name}</p>
          <p class="card-text text-left pl-2">{product.material}</p>
          <p class="card-text text-left pl-2">{product.brand}</p>
          <p class="card-text text-left pl-2">{product.shape}</p>
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
      </div>
      )
      
    })
    }
  </div>
</div>
  </div>
  
  </div>
  
  )
};

Shisha.propTypes = {};

Shisha.defaultProps = {};

export default Shisha;
