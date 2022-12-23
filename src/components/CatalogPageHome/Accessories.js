import React, { useState,useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import dats from "../../data/dats.js";
const  MATERIAL = {
  CLAY: 'clay',
  CERAMIC: "ceramic",
  SILICON:"silicon",
  STEEL: "steel",
  ALUMINIUM:"aluminium",
  Plastic:"plastic"

}
const ACCESSORIES = {
  BOWL: 'bowl',
  TONGHS: 'tongs',
  KALAUD: 'kalaud',
  BASKET:"basket",
  Cigaretteholder:"cigarette holder",
  Pipel:"pipel"
}

const Accessories = ({ state, dispatch }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { products, cart } = state;
  const [material, setMaterial] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const productList = [
    {
      "id": 19,
      "name": "Silicon bowl",
      "material":"silicon",
      "price": 300,
      "accessories": "bowl",
      "category":"accessories",
      "image": 'https://images.prom.ua/3391418765_w640_h640_chasha-dlya-kalyana.jpg'
    },
    {
        "id": 20,
        "name": "Tobacco pipel",
        "material":"silicon",
        "price": 470,
        "accessories": "pipel",
        "category":"accessories",
        "image":"https://tabakevich.com/media/catalog/category/Screenshot_38.png"
    },
    {
      "id":21,
      "name": "Cigarette holder",
      "material":"plastic",
      "price": 99,
      "accessories":"cigarette holder",
      "category":"accessories",
      "image":"https://images.prom.ua/3644441342_w500_h500_mundshtuki-odnorazovye-dlinnye.jpg"
  },
    {
      "id": 22,
      "name": "MG Tongs",
      "material":"steel",
      "price": 224,
      "accessories":"tongs",
      "category":"accessories",
      "image":"https://i0.wp.com/www.shishagoods.co.uk/wp-content/uploads/2021/01/shisha-goods-hookah-shop-products-uk-mg-hookah-tongs.jpg?resize=510%2C510&ssl=1"
  },
    {
      "id": 23,
      "name": "LOTUS ",
      "material": "aluminium",
      "price": 226,
      "accessories":"kalaud",
      "category":"accessories",
      "image":"https://aladin.kiev.ua/images/products/Kalaud-LOTUS-Replica-na-2-Ruchki-Lotus-Bez-Upakovki.jpg"
  },
    {
      "id": 24,
      "name": "JaamBoo",
      "material": "aluminium",
      "price": 1990,
      "accessories":"basket",
      "category":"accessories",
      "image":"https://aladin.kiev.ua/images/products/Korzina-dlya-Uglya-JaamBoo-Srednyaya-Serebristyy.jpg"
    }
  ];
  const handleFilterByMaterial= (event) => {
    const { value } = event.target
    if (material.includes(value)) {
      return setMaterial(material.filter((_material) => _material !== value))
    }
    setMaterial([...material, value])
  }
  const handleFilterByAccessories = (event) => {
    const { value } = event.target
    if (accessories.includes(value)) {
      return setAccessories(accessories.filter((_accessories) => _accessories !== value))
    }
    setAccessories([...accessories, value])
  }


  const productsy = () => {
    const withFilterByAccessories = accessories.length > 0 ? productList.filter((productf) => accessories.includes(productf.accessories)) : productList
    const withFilterByMaterial = material.length > 0 ? productList.filter((productf) => material.includes(productf.material)) : withFilterByAccessories
    return withFilterByMaterial
  }
return(

<div className='Accessories mt-20 d-flex align-items-start flex-column mb-3'>
 
<>
      
      <div class="d-flex mx-auto mt-3">
      <button class="mt-3 w-10 h-10 border-zinc-800 border-2 rounded-lg" onClick={handleShow}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nO3YSw6CMBSF4X8fitHuXAawAXEBdi+ibgJjchMNYSCP2xRyvuROOijcPsgJICIiGxOAGnhZ1Ta2KifgAXS9aoEjK1Lai1+AnVVjY2fvh8eBFZxb+5/5Dw7zx1SNFM6N3FIdrcZ25dPQNdXRWvqytwMreF/bZcc+tRXwtKqsQRERyVJQat5aao4Ooc47NcfcGyn+bMQ9/U5VKjVnKCg1i4j0KZnmpFwimaYQF06mKSrOacT7f243oialXyXTHAUlUxER4esNlJFPhidtdXQAAAAASUVORK5CYII="/>
      </button>
      <Link to="/hookahs"><button className="ml-10 mt-3 w-10 h-10 px-1 border-zinc-800 border-2 rounded-lg"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAEADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAUGBwEDBAII/8QAMhAAAgEEAQIDBQYHAAAAAAAAAQIDAAQFERIGIRMxQQciUWGBCBQVI2JxFjNCUoORof/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC8aKKKAqIe0vqHM9M4e2vsHbWdy73SQSR3O/6+ykEMPXQ+vyqX1T/tivs5jrGBc22KnxUl4Ht2jspS6unvKH/N1sjfl56PlQW7D4ohj8coZeI5lAQpbXfW/Tde6SdNfxE8LS9RyY7bqpjis4HRk33PMs7d/TQ/3TugKKKKArXcTw20ElxcyxwwxKXkkkYKqKO5JJ7AfOtlR68UZjqlMfMOVljYI7qWMj3ZZnZhHv4hBGza+LIfNRQbcf1dg8jmPwm0vGa+MRmWN7eROSDXvKWUBh37EE776qP+2FMrJgMcMMtuZPxW2343ly5gJ9OZXfy+tSfPdP2GdgC3aNHPGQ0F3AeE0DjfFkb0I2e3cdzsGq39qDX1xhrHF9Ry29tNFlIGgvfvJiiuYeXBnOhpZByDMPJQSVJ0RQW4u+I5a3rvqs1xYi9bIWKXJtZ7ZWJ8NZ9cmTfutrexsaOjojfcV20BRRRQFJcVpeo84hP5jGCTX6CnEf8AUanVIMw64fMw5qX3bKWEWt9JrtEAxaKRj6IpZwT6eICdAE0D+qe+0VGZ7DDRS3dpbQGWRuU0bliwA0AVVtDRPb17fCrgBBAIOwfIiqS+0jmrRoMZgkUNeLJ97dtfy00ygb/UdnX6R8qC4sM8smHsZJzGZWt4y5iXihYqN8R6DfkK7KVdK5q06h6escpjwFgniBCa14ZHZl+hBH0prQFFFFAVggEEEAg+YNZooFMfTeHij8KKxSOD0gRmWIfsgPED6VRvtW6B6iuuqpJsNgIzjBGqWwx8aqoHcnko8m5FtnXevoil+Xx1xkFjW3y99juO9m0ER571580by+WvOgg/sp6MkselYYuqMLYxX8cjiCQIv3hYieQDOO4PItoA9hr1qWvishYJywmRlcKO1pkZGmjf/IdyKT5bJYD+00ny3RuYvLUxW3W+agcyo/NhH2A3sDw1Q9/318jTSTpeK6XjlctlsgnqktyIUYfBlhCBh8iCKBhg8nHmMXDfRRtGHLKyMQSrKxVhsdjplPcdj5iu+tdvBDbQR29tEkMMShI441CqijsAAOwA+FbKD//Z"alt="hookahimage"/></button></Link>
      <Link to="/shisha"><button className="ml-10 mt-3 w-10 h-10 px-1 border-zinc-800 border-2 rounded-lg"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAEADASIAAhEBAxEB/8QAGgAAAwADAQAAAAAAAAAAAAAAAAYHAgMEBf/EADIQAAEDAwMDAgUDAwUAAAAAAAECAwUEBhEAEiEHMUETURQiQmFxMoGhFieRM4KTstH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AuOjRo0Bo0awfebp2XHnlBDbaStaj2AAyToJp1FVU3bdkbY0bVuUzTaDXyVQ0fmbSn/THf3wce6kHxruse6JGkl12beKgJlhO6kq/prmucKB8qwD+cHPIOuPpY4p2IuC+a5pa3pSodeQlPKgw1kJQPvkKH7DXbOR9L1NsihmYjdSyTeaiOfUQFsupVgpKh4Kk4z7gHxoH/RpX6d3Qbpt5L9S36MlSrNPXMEbSh1PfjwD3+3I8aaNAaNGjQGlHqzXGO6dTjye66f0P+RQQf4UdN2kXra0t3ppLbASUFlRAHgOoz/7oPYthugi7ehbffqadNUqPQkU5WAt3CBvUE9yM5OkrplclBa3TOoXNv+k3FSD1GoAZUte7dtSPJ+Y/4J8HTNcdqRV6QcdUqeNJXIaQ5QSDBw40ogKTjkZHnGfwQedTSwLVdN6TgvCRbcYgKj455sqwy684Cr1lZAGAE5Pbx4yCDhuTbfVyjqacFuOuulO9BG3FQgZCikjIOCB+Vqzqmal/UmUoJeLsyciX01DJn6f0HQkjIyrPBAI5RjB9tVDQGpLTy3UG4rnnIail4qIXGPY2Gm3uLbJJQsbgoEFOPbuOBnVa1N+pDL9sz8bfke0paKfFJKtN93KdR4V+Qf52+BoMzbnUsDIvul3exjGsf9dcU5GdUXoetj6hdvy9NUsqaUkBTTpBGMj9KQfbkjTHdVFPy7MfNWTPIZW23vRTujdT1iFYPPHfHY/fgp76XarqE7VRUlb88w9bVzLpHE06lr2tOObTtLbvjJHfP4JOgWkyNG5bEbZ/USnk4GQoVD4CV2H00qTwghQ4OAQD3HGcpPI8ymty5JfqA/AS8q0piTpmaisraZQPxtK3gIUk+5wB+Rnkd6ZAT0VNdJ6aVupCamjRT7K312/VKloVsKiBk5JAOfGc8ank1GOdMbhjbthFuSNuvMOIpUKcJ9L1EKUlsk/QVK3g9++eeVA43UwxI35aNoxTaW6SJUJCpQ2OGkN49NJ/OMf7xqn6TOnFrVUNTVcvPL9a4JZfrVi924Nj6W0ntgZ8ceBkAac9Aa1VdMxWUr1LVNJdYeQW3G1jIUkjBB/bW3RoJXASD3TOcFszrpNuVbilRMi4eGCTktOHsO/f357E7d922Vd951NRSSsxEUsMHiqlQxSes6E5+UkqAKVYxnarnJ8afpyHj56NdjpWmRUUro+ZCvB8EHuCPcan7Efe1gD0YdP9T2+gYbpXVhFVTpHhJ+odhwD9kp0CRP8A9vYiQhYu546aiqtC2KqNWoCoYcUnaVJ25wQRnB7ex76arCkYy+OlxtSprGDKN0i2PQWcKTtJ9JYB/UAAjOPbxrGlvKwYuqcqpC0KuJrlrK1qqosb955O08kfxrzrwlIu+SlVuWbN1Eukj4eUbb+FDahylRc5yBj6sfYjvoHzpDMuTVhx66lRNTS7qR7PfKDgZ++3aT+dOekjpJa8patu1FPNvNrq6qqVUrShZXsKkpBCleVfLzj/ACdO+g//2Q=="alt="hookahimage"/></button></Link>
      <Link to="/chsrcoal"><button className="ml-10 mt-3 w-10 h-10 px-1 border-zinc-800 border-2 rounded-lg"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAAEADASIAAhEBAxEB/8QAHAAAAwEAAgMAAAAAAAAAAAAAAAYHBQMEAQII/8QANhAAAQMDAwEFBQUJAAAAAAAAAQIDBAAFEQYSITEHEyIyQQgUUWFxFSNCYmMWJTZSVHSBsbL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AuNFFFAVxvvtRmVvyHUNMtpKluOKCUpA6kk9BS3fdZxoU1Vqs0R69Xr+iiEYa+brh8LY+vPI4pPdcYuj0e6a0mm8W8x3piY9t5t0ZLSkg7vV5Wc9fmADkUFPt0+JdITc23SWpMV3Ox1pQUlWCQcH6gj/FdmkvseKD2fW4tY7vvZOzaOMd+5jFOlAUUUUBSbqoTrvqmBptq5v2+A9CdlSVRcJdd2rQkIC/wjxZJHPGPWnKoZ7RE+Zb7vaVQZT0dT0N5lxTSykqQVpJTkehwKAn6ts+iURI8VLLMy3zJJ+ybWvLT6DltpUl3JyoJGceI5IyE+iDDuNy1lNYtslfutjhJLyoMFO1tpsHkIRyVOKUoJSVZJUsc81haasyr5dURC460yElx95qOp8tNjqrYnxKxkdPr0zX0BA7OrTb9PxZuiX25U1t1qR7y48FJnJQ4hzuyocJBU2nBA4I59TQZ3Zben4uoWrPOBtgdjP7re+4AO/Elax3SSf5HdvHmKFceDmv0iW/RzExd5gaitTci3zH/fYr69ocZK+VNHacpWlRUdySQreTnOazLFf51m1PAskS6OX+wy3lR25khs74zgSVBAe8r3lVnHI6EjGCFOooooCoJ7Sw/eViP6Lv/SavdTrtW0PI1RKtVxYZExu3lffwA93K5CDg4SsggHjocceooJb7Pf8AH6v7J3/aavM3TaUzHLjYpKrZcHDudKE7mJB/VayAo/mG1f5scUs2eRbH1wRo2LGhzrQl1MixTEGO8QsI3ZPPi8KTuwoHPJHUN1o1BCuby4gDsW4NDLsGUnY8gfHHRSfzJJSfjQY1qgStWwGJ+o5AVEcyU2uKVJYOCR96fM708pwn4pPWup2hzIFknaRky3G4sKPc8FW3CW09ytI4HQcj6Vo6dusGz6NgSblJQw2dyU5yVLUVqwlKRypR9AASa6V2uaFvRL5qQMWexwu8Lbc3l+UVtqRgtjyjCidviUfUJxigcY0hiXHbkRXm3mHEhTbragpKwehBHBFctTTR1nuP7TC6aeiSrBple4uwZas+9qOcLQyR9yM+uRkAcYzVLoCiiigxtQ6ZteoUNmc0pElnmPMjrLb7B+KFjkfTp8qTNSyJWm4zCdboF4s6XgmNeI33MyIs9CoJIOcfjQQTjkHOKpleqkJWAFpCgCCMjPI6GgltgdZUtDWgIki8yEJKDf7wpXcR0nJKW+Bk/FKEpHIJJ5pssmjI0Sam63qW9eryOkyWBtZ+TTY8LY+nPJ5pnACRhIAHwFeaAooooP/Z"alt="hookahimage"/></button></Link>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <div class="text-2xl py-3">Filters</div>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='filter w-44 text-left ml-20'>
            <div>
              <div class="text-xl">Accessories:</div>
              <div>
              <div>
                <input class="accent-amber-600" id={ACCESSORIES.Cigaretteholder} type="checkbox" checked={accessories.includes(ACCESSORIES.Cigaretteholder)} value={ACCESSORIES.Cigaretteholder} onChange={handleFilterByAccessories} />
                <label class="pl-2 text-lg" htmlFor={ACCESSORIES.Cigaretteholder}>{ACCESSORIES.Cigaretteholder}</label>
              </div>
                <div>
                <input class="accent-amber-600" id={ACCESSORIES.BOWL} type="checkbox" checked={accessories.includes(ACCESSORIES.BOWL)} value={ACCESSORIES.BOWL} onChange={handleFilterByAccessories} />
                <label class="pl-2 text-lg" htmlFor={ACCESSORIES.BOWL}>{ACCESSORIES.BOWL}</label>
              </div>
              <div>
                <input class="accent-amber-600" id={ACCESSORIES.KALAUD} type="checkbox" checked={accessories.includes(ACCESSORIES.KALAUD)} value={ACCESSORIES.KALAUD} onChange={handleFilterByAccessories} />
                <label class="pl-2 text-lg" htmlFor={ACCESSORIES.KALAUD}>{ACCESSORIES.KALAUD}</label>
              </div>
              <div>
                <input class="accent-amber-600" id={ACCESSORIES.TONGHS} type="checkbox" checked={accessories.includes(ACCESSORIES.TONGHS)} value={ACCESSORIES.TONGHS} onChange={handleFilterByAccessories} />
                <label class="pl-2 text-lg" htmlFor={ACCESSORIES.TONGHS}>{ACCESSORIES.TONGHS}</label>
              </div>
              <div>
                <input class="accent-amber-600" id={ACCESSORIES.BASKET} type="checkbox" checked={accessories.includes(ACCESSORIES.BASKET)} value={ACCESSORIES.BASKET} onChange={handleFilterByAccessories} />
                <label class="pl-2 text-lg" htmlFor={ACCESSORIES.BASKET}>{ACCESSORIES.BASKET}</label>
              </div>
              <div>
                <input class="accent-amber-600" id={ACCESSORIES.Pipel} type="checkbox" checked={accessories.includes(ACCESSORIES.Pipel)} value={ACCESSORIES.Pipel} onChange={handleFilterByAccessories} />
                <label class="pl-2 text-lg" htmlFor={ACCESSORIES.Pipel}>{ACCESSORIES.Pipel}</label>
              </div>
              </div>
            </div>
<div>

</div>
<div class="text-xl mt-3">Material:</div>
<div>
<div>
  <input class="accent-amber-600" id={MATERIAL.ALUMINIUM} type="checkbox" checked={material.includes(MATERIAL.ALUMINIUM)} value={MATERIAL.ALUMINIUM} onChange={handleFilterByMaterial} />
  <label class="pl-2 text-lg"htmlFor={MATERIAL.ALUMINIUM}>{MATERIAL.ALUMINIUM}</label>
</div>
  <div>
  <input class="accent-amber-600" id={MATERIAL.STEEL} type="checkbox" checked={material.includes(MATERIAL.STEEL)} value={MATERIAL.STEEL} onChange={handleFilterByMaterial} />
  <label class="pl-2 text-lg"htmlFor={MATERIAL.STEEL}>{MATERIAL.STEEL}</label>
</div>
<div>
  <input class="accent-amber-600" id={MATERIAL.CERAMIC} type="checkbox" checked={material.includes(MATERIAL.CERAMIC)} value={MATERIAL.CERAMIC} onChange={handleFilterByMaterial} />
  <label class="pl-2 text-lg"htmlFor={MATERIAL.CERAMIC}>{MATERIAL.CERAMIC}</label>
</div>
<div>
  <input class="accent-amber-600" id={MATERIAL.CLAY} type="checkbox" checked={material.includes(MATERIAL.CLAY)} value={MATERIAL.CLAY} onChange={handleFilterByMaterial} />
  <label class="pl-2 text-lg"htmlFor={MATERIAL.CLAY}>{MATERIAL.CLAY}</label>
  </div>
  <div>
  <input class="accent-amber-600" id={MATERIAL.SILICON} type="checkbox" checked={material.includes(MATERIAL.SILICON)} value={MATERIAL.SILICON} onChange={handleFilterByMaterial} />
  <label class="pl-2 text-lg"htmlFor={MATERIAL.SILICON}>{MATERIAL.SILICON}</label>
  </div>
  <div>
  <input class="accent-amber-600" id={MATERIAL.Plastic} type="checkbox" checked={material.includes(MATERIAL.Plastic)} value={MATERIAL.Plastic} onChange={handleFilterByMaterial} />
  <label class="pl-2 text-lg"htmlFor={MATERIAL.Plastic}>{MATERIAL.Plastic}</label>
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
               <img className="img w-full h-80"src={product.image}/>
        <div class="card-body">
          <p class="card-text text-left pl-2 mt-4 text-2xl">{product.name}</p>
          <p class="card-text text-left pl-2">{product.material}</p>
          <p class="card-text text-left pl-2">{product.accessories}</p>
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
      </div>)
      
    })
    }
  </div>
</div>
  </div>
  </div>
  
  )
};

Accessories.propTypes = {};

Accessories.defaultProps = {};

export default Accessories;
