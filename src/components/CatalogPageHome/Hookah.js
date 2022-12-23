import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet, Link } from "react-router-dom";
import dats from "../../data/dats.js";
const  MATERIAL = {
  ALUMINUM: 'aluminum',
  CERAMIC: "ceramic",
  STEEL: "steel",

}
const BRANDS = {
  AMYDELUXE: 'AMY Deluxe',
  KARMA: 'Karma',
  ARDESTO: 'Ardesto'
}

const SHAPES = {
  CIRCLE: 'circle',
  SQUARE: 'square',
  TRIANGLE: 'triangle'
}
const Shisha = ({ state, dispatch }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { products, cart } = state;
  const [material, setMaterial] = useState([]);
  const [brand, setBrand] = useState([]);
  const [shape, setShape] = useState([]);
  const productList = [
    {
      "id": 1,
      "name": "The-Hookah Black",
      "material": "aluminum",
      "price": 2700,
      "brand": "AMY Deluxe",
      "shape": "circle",
      "image": 'https://aroma-dum.com.ua/image/cache/catalog/image/cache/catalog/kalyany/z-hookah/1635410465048-800x800.webp'
    },
    {
      "id": 2,
      "name": "Japona",
      "material": "ceramic",
      "price": 1500,
      "brand": "Karma",
      "shape": "square",
      "image":"https://ae01.alicdn.com/kf/Hee3c5e362bac4a43b20dfb4e3917e8a78/Square-hookah-Arab-hookah-high-grade-lion-head-hookah-shisha-smoking-pipe.jpg"
    },
    {
      "id": 3,
      "name": "Bro Stick",
      "material": "steel",
      "price": 1350,
      "brand": "Ardesto",
      "shape": "triangle",
      "image":"https://image.made-in-china.com/202f0j00DOnhSHvJyuqL/2022-New-Design-Stand-Hookah-Big-Size-Triangle-Cone-Glass-Hookah-Shisha-Set-with-Black-Metal-Base-LED-Light.jpg"
  },
    {
      "id": 4,
      "name": "Led Light",
      "material": "steel",
      "price": 1480,
      "brand": "Ardesto",
      "shape": "square",
      "image":"https://m.media-amazon.com/images/I/61n-dEYl7NL._SL1500_.jpg"
  },
    {
      "id": 5,
      "name": "Nanosmoke",
      "material": "steel",
      "price": 1570,
      "brand": "Karma",
      "shape": "square",
      "image":"https://avatars.mds.yandex.net/get-altay/6527792/2a00000182aaf057d5447155ba55e87f39b5/XXXL"
  },
    {
      "id": 6,
      "name": "Shisha Baks",
      "material": "aluminum",
      "price": 1990,
      "brand": "AMY Deluxe",
      "shape": "square",
      "image":"https://www.shishabucks.com/world/wp-content/uploads/sites/9/2015/10/modern-tall-hookah-cloud-one-with-two-hoses-bowl-coal-holder.jpeg"
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

<div className='Hookas mt-20 d-flex align-items-start flex-column mb-3'>
<>    <div class="d-flex mx-auto mt-3">
      <button class="mt-3 w-10 h-10 border-zinc-800 border-2 rounded-lg" onClick={handleShow}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nO3YSw6CMBSF4X8fitHuXAawAXEBdi+ibgJjchMNYSCP2xRyvuROOijcPsgJICIiGxOAGnhZ1Ta2KifgAXS9aoEjK1Lai1+AnVVjY2fvh8eBFZxb+5/5Dw7zx1SNFM6N3FIdrcZ25dPQNdXRWvqytwMreF/bZcc+tRXwtKqsQRERyVJQat5aao4Ooc47NcfcGyn+bMQ9/U5VKjVnKCg1i4j0KZnmpFwimaYQF06mKSrOacT7f243oialXyXTHAUlUxER4esNlJFPhidtdXQAAAAASUVORK5CYII="/>
      </button>
      <Link to="/shisha"><button className="ml-10 mt-3 w-10 h-10 px-1 border-zinc-800 border-2 rounded-lg"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAEADASIAAhEBAxEB/8QAGgAAAwADAQAAAAAAAAAAAAAAAAYHAgMEBf/EADIQAAEDAwMDAgUDAwUAAAAAAAECAwUEBhEAEiEHMUETURQiQmFxMoGhFieRM4KTstH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AuOjRo0Bo0awfebp2XHnlBDbaStaj2AAyToJp1FVU3bdkbY0bVuUzTaDXyVQ0fmbSn/THf3wce6kHxruse6JGkl12beKgJlhO6kq/prmucKB8qwD+cHPIOuPpY4p2IuC+a5pa3pSodeQlPKgw1kJQPvkKH7DXbOR9L1NsihmYjdSyTeaiOfUQFsupVgpKh4Kk4z7gHxoH/RpX6d3Qbpt5L9S36MlSrNPXMEbSh1PfjwD3+3I8aaNAaNGjQGlHqzXGO6dTjye66f0P+RQQf4UdN2kXra0t3ppLbASUFlRAHgOoz/7oPYthugi7ehbffqadNUqPQkU5WAt3CBvUE9yM5OkrplclBa3TOoXNv+k3FSD1GoAZUte7dtSPJ+Y/4J8HTNcdqRV6QcdUqeNJXIaQ5QSDBw40ogKTjkZHnGfwQedTSwLVdN6TgvCRbcYgKj455sqwy684Cr1lZAGAE5Pbx4yCDhuTbfVyjqacFuOuulO9BG3FQgZCikjIOCB+Vqzqmal/UmUoJeLsyciX01DJn6f0HQkjIyrPBAI5RjB9tVDQGpLTy3UG4rnnIail4qIXGPY2Gm3uLbJJQsbgoEFOPbuOBnVa1N+pDL9sz8bfke0paKfFJKtN93KdR4V+Qf52+BoMzbnUsDIvul3exjGsf9dcU5GdUXoetj6hdvy9NUsqaUkBTTpBGMj9KQfbkjTHdVFPy7MfNWTPIZW23vRTujdT1iFYPPHfHY/fgp76XarqE7VRUlb88w9bVzLpHE06lr2tOObTtLbvjJHfP4JOgWkyNG5bEbZ/USnk4GQoVD4CV2H00qTwghQ4OAQD3HGcpPI8ymty5JfqA/AS8q0piTpmaisraZQPxtK3gIUk+5wB+Rnkd6ZAT0VNdJ6aVupCamjRT7K312/VKloVsKiBk5JAOfGc8ank1GOdMbhjbthFuSNuvMOIpUKcJ9L1EKUlsk/QVK3g9++eeVA43UwxI35aNoxTaW6SJUJCpQ2OGkN49NJ/OMf7xqn6TOnFrVUNTVcvPL9a4JZfrVi924Nj6W0ntgZ8ceBkAac9Aa1VdMxWUr1LVNJdYeQW3G1jIUkjBB/bW3RoJXASD3TOcFszrpNuVbilRMi4eGCTktOHsO/f357E7d922Vd951NRSSsxEUsMHiqlQxSes6E5+UkqAKVYxnarnJ8afpyHj56NdjpWmRUUro+ZCvB8EHuCPcan7Efe1gD0YdP9T2+gYbpXVhFVTpHhJ+odhwD9kp0CRP8A9vYiQhYu546aiqtC2KqNWoCoYcUnaVJ25wQRnB7ex76arCkYy+OlxtSprGDKN0i2PQWcKTtJ9JYB/UAAjOPbxrGlvKwYuqcqpC0KuJrlrK1qqosb955O08kfxrzrwlIu+SlVuWbN1Eukj4eUbb+FDahylRc5yBj6sfYjvoHzpDMuTVhx66lRNTS7qR7PfKDgZ++3aT+dOekjpJa8patu1FPNvNrq6qqVUrShZXsKkpBCleVfLzj/ACdO+g//2Q=="alt="hookahimage"/></button></Link>
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
              <input class="accent-amber-600" id={BRANDS.AMYDELUXE} type="checkbox" checked={brand.includes(BRANDS.AMYDELUXE)} value={BRANDS.AMYDELUXE} onChange={handleFilterByBrand} />
              <label class="pl-2 text-lg" htmlFor={BRANDS.AMYDELUXE}>{BRANDS.AMYDELUXE}</label>
            </div>
            <div>
              <input class="accent-amber-600" id={BRANDS.KARMA} type="checkbox" checked={brand.includes(BRANDS.KARMA)} value={BRANDS.KARMA} onChange={handleFilterByBrand} />
              <label class="pl-2 text-lg" htmlFor={BRANDS.KARMA}>{BRANDS.KARMA}</label>
            </div>
            <div>
              <input class="accent-amber-600" id={BRANDS.ARDESTO} type="checkbox" checked={brand.includes(BRANDS.ARDESTO)} value={BRANDS.ARDESTO} onChange={handleFilterByBrand} />
              <label class="pl-2 text-lg" htmlFor={BRANDS.ARDESTO}>{BRANDS.ARDESTO}</label>
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
            <div>
              <input class="accent-amber-600" id={SHAPES.TRIANGLE} type="checkbox" checked={shape.includes(SHAPES.TRIANGLE)} value={SHAPES.TRIANGLE} onChange={handleFilterByShape} />
              <label class="pl-2 text-lg"htmlFor={SHAPES.TRIANGLE}>{SHAPES.TRIANGLE}</label>
            </div>
            </div>
          </div>
          <div class="text-xl mt-3">Material:</div>
          <div>
            <div>
            <input class="accent-amber-600" id={MATERIAL.STEEL} type="checkbox" checked={material.includes(MATERIAL.STEEL)} value={MATERIAL.STEEL} onChange={handleFilterByMaterial} />
            <label class="pl-2 text-lg"htmlFor={MATERIAL.STEEL}>{MATERIAL.STEEL}</label>
          </div>
          <div>
            <input class="accent-amber-600" id={MATERIAL.CERAMIC} type="checkbox" checked={material.includes(MATERIAL.CERAMIC)} value={MATERIAL.CERAMIC} onChange={handleFilterByMaterial} />
            <label class="pl-2 text-lg"htmlFor={MATERIAL.CERAMIC}>{MATERIAL.CERAMIC}</label>
          </div>
          <div>
            <input class="accent-amber-600" id={MATERIAL.ALUMINUM} type="checkbox" checked={material.includes(MATERIAL.ALUMINUM)} value={MATERIAL.ALUMINUM} onChange={handleFilterByMaterial} />
            <label class="pl-2 text-lg"htmlFor={MATERIAL.ALUMINUM}>{MATERIAL.ALUMINUM}</label>
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
          <Link to={`/products/${product.id}`}><i class="bi bi-eye text-neutral-500 text-4xl hover:text-neutral-500"></i></Link>
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
