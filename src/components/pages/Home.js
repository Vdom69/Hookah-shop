import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from "./Home.scss";
import { Outlet, Link } from "react-router-dom";
const Home = ({ state, dispatch }) => {
  const { products, cart } = state;
  const productList = [
    {
      "id": 1,
      "name": "Silicone bowl",
      "material": "selicone",
      "price": 200,
      "image": 'https://images-na.ssl-images-amazon.com/images/I/41jojqYAN0L.jpg',
      "star":44
    },
    {
      "id": 2,
      "name": "Tongs",
      "material": "steel",
      "price": 300,
      "image":"https://www.hukago.com/Uploads/UrunResimleri/buyuk/alpha-x-cyber-nargile-masasi-e36-46.jpg",
      "star":73 

    },
    {
      "id": 3,
      "name": "Coconut coal",
      "material": "coconut",
      "price": 245,
      "image":"https://tabakevich.com/media/catalog/product/cache/7/image/500x500/9df78eab33525d08d6e5fb8d27136e95/s/c/screenshot_5_7.jpg",
      "star":73 
  },
  ];
  const productsy = () => {
    return productList
  }
  
  return( <div class="">
    <div class="container text-center">
    <div class="mt-5">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 pt-5">
    <Link to="hookasvideo" class="text-decoration-none">
        <div class="col-sm-8">
            <div class="w-64 h-32 border border-black rounded-lg text-black mx-auto text-center text-xl mt-5">
            <div class="mt-2 w-16 pt-3  h-20 mx-auto bg-top bg-cover bg-no-repeat bg-bottom">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFUlEQVR4nO2Zy28NURzHP21FPSMeqesRK3+AYIUoEvFaWEgQ9QirCrGoFekCFWl0JzbEI2Fhx4qFNCiJeJaKR4la2QgJoRep1shJvpOcTM7MnXt7594Zud/kJDPn+zu/33znd2bmd85ADTX897gFeIF2jwzip0NIngziuS5+iZo5fkYGcVYXf0rNHJ8hA+hVFnI6XwT8taaVOV4oztj0AQ9JIfocz4RXoJVtqvUAj8vkK6cLiyui18peLMRxOgjcBjaWSZQr/qhRbLo7Rx/SGT9RmA/UXaAJ2KfMeGXOjFcJIUHsV1AzzTItpElBf2RdSBKBvZqQCt3B1cBL4APQAYwbpb+yI07gedYbzm+PgGkl+ksEcQJ3yuYasEpZMedPHWK8NAvxSxEjwmAu8C5EjBfwNz0kcxUXMgkYBoaA8Vb/HOCtQ4xn+Zuh4tKVuYoLWSb+iYObDfRbYo5Z/jqsTL4ptmBMQsgO8VdC+Jl6m4XVcv0STLWFHBLfFWGzVTZfgWY9S9/Ut4UKoZCQ0+IPRNhcl0271deuvhukRMhl8TsjbL5ETK3PpETIVfGbImwGIoS8JyVCbopfE+ODedLq61LfCVIi5L74pRE2i2Uz4MiS4VIh5IX4BRE2dQ4/nprhUiHEr6vmF+nHq3TNVSjgJ/G5rAv5Ln5K1oUMip8cwk8EWiOEtAITSIGQvHhzwUFsBz5aProtrtvqNzYtVFnIL/F2CT8GuGCNNZvZ6wNvqDr1+b8bPI1pqJaQ3+LtNfp59ZmfO3uB+ojx9bLxfwSdo0pChsSP1flanQ8W+Ei61jX5GFVCYkL+iDfTyeCOzttKiHUwgZ3N2EJGxDcE3mKlrPhmJbCzGVuI/xeqLlCym5VhscglWdr7d9jsdgQx1XEH/UXU8RJidWis8VF29Mj5Hge3S5x5Lnw0K0sjRS5jN2uMGbuCBNBipXuDXrONwDqrztoWGHNU/cM6NvZhaNTuynDS6xMz9y9FrPAuhow7bF1cnDYCHEm6rDfOd2s/N6/n5oGmVlTg5cCrGCJeAyuTFFBDDbjxDwIwkTNG8ryhAAAAAElFTkSuQmCC"/>
            </div>
            <h3>Hookah</h3>
        </div>
        </div>
        </Link>
        <Link to="shishavideo" class="text-decoration-none">
        <div class="col-sm-8">
            <div class="w-64 h-32 border border-black rounded-lg text-black mx-auto text-center text-xl mt-5">
            <div class="mt-2 w-16 pt-3  h-20 mx-auto bg-top bg-cover bg-no-repeat bg-bottom">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTElEQVR4nO2YW4hOURTHf+P6mZpbNMqdBx7QKJfGDB5QjIhCHpRGiihPxLiUPGAQM4Oa8GDIuD4pcpkHD2qQKAbJXRk1My5JH+X2adf/1PY13znnO8znZM6/dp2zz1p7rf/Ze62994IIESJ0WvQAdgJvgETIWjOwQz56ojIEDic82nY/RJolPJHwocSaGU84rMOKhF//IiLW9D8GTgHD+R05wHhgICGfkb5AqzVGHJgL5AO1wBf1/wCqgKywEqmU7j2gQc/G+ed6/q5vDqFpYSXyVLoz9LfPWOPdBkZLbrf6toSRSAz4CXyzNqwjFok8S3av+jeGkUgW8FXLpxswQbFgltEwS64L8Eg2SsO6tJqkOxM4kWIXXqr+V0DXTBKJKcM0q1Wprz2sk26TdUIosr6PBN6qf1GKMWIe9gITqWnnrFOdQrcXcD9JdpC+jbPInXWxX+NhLzARZ18o0Zo2zy0u+iYeHlrj3AIuKHbM+2Wgp4t+q4e9tInkJA1c6pMI0t0MtFnjmUSwT7PmhlYXe7lBiEzVe3UaS6s9QguAhUA/nzrVLvamByFyXu8x5X0n+Pa4BPvfQMzF3sUgRILuvB2FrUm+ecIRtIPT7AuFZB6FQBlwJcknX0TiEpxv5fwwtDbFW0I+euKBhIt1/N4AXFfmyLTzLbJdIV9KrA3XE87J9Djhw0n5Zqo8nhgAfJbCCsKDlday8pvKKbemt14VlWwyj2wtJ2cmTFuS7iDlVuCHocWDkHDQX+ux6R+Rist2ZTrLKUKECB2PPFURRyltlulKuxxYD2wDDgDHgHPAVeAO8Ax4l3SWaq99Uiou8OtQvpxYrI2oQpmjVkUFc8S/BtwFXgLvM5zNjvohYf7kh4AGzB99rfNaI3AJOA0c1HXXkTsEzNPlbayux32A3tIzMi+AIUm+jdA3458nbkq4UYVop7xpLjmrNEuzgSnAGGAosFYypo61LMW4pp5VZy2RSSnkcj3IOD/DE87GZ/4Ouos4ZPa7FJ7XBCAzOQCZhF8iN6wZqVdcOIOadtiakSIZKRDBjiQzOF0ixX8QvB9V/3XINFgxsgvYBKxWtfGJRWaWYqS7B5k56cSIM0CYs1Yd/8E+Uq/tIUKECJ0RvwBC1pj1+K3KnAAAAABJRU5ErkJggg=="/>
            </div>
            <h3>Tobacco</h3>
        </div>
        </div>
        </Link>
        <Link to="accessoriesvideo"class="text-decoration-none">
        <div class="col-sm-8">
            <div class="w-64 h-32 border border-black rounded-lg text-black mx-auto text-center text-xl mt-5">
            <div class="mt-2 w-16  h-20 pt-3 mx-auto bg-top bg-cover bg-no-repeat bg-bottom">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcklEQVR4nO2YOWhVQRSGP02IwQ0RV6JExK0ILqi4pFIQtLFQDLFwBwvXFFpaahLFDSSFkChYaBADGhewURTFUgWjpUXiLsYYt2C8MvBfOIT7kvued+57Sn44zH1nZs7M/+bMmTMDg/i/UALUA6+AYADpAGrVJy5KgZPq26Fvp0scdTEI9JUjWdg/HdH/lA8iHTK+LEbb5WZl4uKd+ri+lfp+i0cibqCBEE6kPQcilb6J1ObgWodN/x3AC+An8BzY3sf+qbRcq0RkwpXpT9pFItzsGzO0qzb23cY+YTb7cV+b3SKcSFz9E+n3AcNVBsBj8oxsiXRLP0K/XRlIn1fkuiL7RcKVdkUWADeBL0AXcAOY75lDvxPOpO9vj8wBvkbUOd3sQiPisA1oA36o3Cp9i/o0AxMlzdJd8cghZyIDnR+TjG6yz3PEN5HJ/zqRFuNakyQF71pDgTKVIWab8Gylu1A3+3rgvepdWWXqXKi9rtDrpBWY52nusSacST9L0SrMiF35G9hJnpEtkb3Sn9PvGhHJO5lsiWyR/oFJBPcXAplsiYwCXqruVqGQGRODiDudLZYCn019Xsm4yTWYUPkpok2n6tzl6bxC7RKjv6ZDrj8yG3ySqNbEA2WojcCiiHaLgUsmQnWZlbgIFAEVGcjUmNPcnjOJ4ZD+qV7gDDAuRp/xwAXjSo5csanPRKYjIl1JBLtMSr02h/6rgD19SKCVuWqIPjTE3wBDSBAV8vVfwOoE7RbJzQK5XRjNnHwH1pEw7ka8hPwtig2JTkUzF5o3A7uBGSSMhWaZw3t20iSWkALqNeDRBG1WpU3C4ZHx2Wd6UJ5GZpSrzXMFhq/6Pqk6hzWyeZsU8TriftADNOnFo1SyQLqeDI8LYb+zSuPD7Dc1fNOgo3VXiDPZJrV1BIfpPtEY0c8dlqkhDIkTjK5cT5ptxn3a9LQZuk8UpmuvPZVNd0dPDfc16MoEba6QzTukiCMeotYx2XRlaphrEriRCdgbC3yQTWc7VYQnuztT/hYNsuVcNnVUKOL05pgw2nffXtlKfTVCHDAhM5cLzyYlnc7GQfKMOnMGNMa8K5TplTDwEDSywhTgsm54QULSJXIzSZHExwQJ9JWPWjHvuKwBWxMesEzPooEeqb0jdCcf/9pUk8p7R5CSpJZn+ZR7/mkMgtTwB2nzAiaNntuzAAAAAElFTkSuQmCC"/>  
            </div>
            <h3>Accessories</h3>
        </div>
        </div>
        </Link>
        <Link to="charcoalvideo" class="text-decoration-none">
        <div class="col-sm-8">
            <div class="w-64 h-32 border border-black rounded-lg text-black mx-auto text-center text-xl mt-5">
            <div class="mt-2 w-16 pt-3  h-20 m-auto bg-top bg-cover bg-no-repeat bg-bottom">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADL0lEQVR4nO1ZW4hNURj+iIPBwYuMPCAZlxiRyzwotweZlJTkTFLzIB6UUmqeeGCeTBRpTJ4oTC4PPGCe5JbyMoNxmyaiRFKMy5wGs/TXt2q12lt773W2vUb7q9Wctc5/2d9Za/2XPUCOoQflyXDGf0ckK6iciIV8RyoEVYmjNcy6cHcAjAPwOuW1AoDnlu9RLkTmWsZuBzhOY60A4Jnlu9mFyH4aOY5s0GwQGQAwK6mhWzRSj2zQRf+P+fdCEiOTAPwE0A+gCv8e0/jwPwDMBlAGMAhgYVxD22joJrJBA/3f4Pw0521xDbVRcR+yQSv9N3G+hPM+AKPjGHpCxTpkg6f0vyrgmTZGNTIRwG+eS6f4nRBF3ge5o2ON9SMk0hLV0Hoq3HNIpI1IjuX032mtbzByTSQcpIL8AnExnOdbLmdSNNL/eWt9DtffRDXUToXtCXZCB4ndSI4W2jgQcORk/XtUQ51UWBbzAQ4ZmXglkuMabWx1LSLfU7g6hvNNvKDa0QIkx33akLviRKSfwlHjtWTeL9TRZObBPfTWuBKJIzzSOIqXANzl53WW3FoAqyPafEcbUxyfLZZwE2VfsiTXF/WkIbMIwAcA3QBGOJ4IlQaRahZ1cpzWGD1MmQlVduic8WBRI6H6i/9UiByl3OWAPDBg2BFSD0OSXOZEisZu1IaU4SUAOwDMBDCeBZ/irnlDpBRSLqwAMCFE55RV0XpBpJ0yewLWw5qfzdTp8IlIF2UkImlMZsW6JURnBnXe+kTkM2Wk5NfYZYXeWivDV/H7sk9E+igjuUPjKtc+ApjKaHbY+H6M0Yd7Q6Q7oKbqMXT1eGCVMorvsbwh0koZ6V00zMSnhxxBjZ0heSdTInWUkSM2nWuvAoh84ncFo+cu+UREcJZyvQy5FwOIdJDEGc5fcO4VkSL7epH9ZVTB5rhi3CfZvaWO/lUaRMCo1Wo1VUFDXkovroB/lRYRDWmkjgF4BOAbRy8zfUPE8t0LIpWEyolYyHekQlABR0tag71D+Y7UADhh1HaKpVBsQ1lAcVw3wvog/1dTz9eysQz5ML6ys5zv8otkOXp4J8La5hzwGX8AIO0/LzhOEVAAAAAASUVORK5CYII="/>
            </div>
            <h3>Сharcoal</h3>
        </div>
        </div>
        </Link>
</div>
</div>
</div>


<div class="container text-center -mt-10">
  <div class="row">
  <div class="col-md-6 mt-sm-5 mt-5">
  <img className="mt-5 w-full h-96 m-auto bg-contain bg-gradient-to-br bg-no-repeat text-opacity-50" src="https://kalyan-hut.ru/upload/iblock/867/xx.jpg"alt="hookahimage"/>
      <h3 class="text-white text-center font-bold text-7xl -mt-80 sm:text-8xl">Hookah</h3>
      <h3 class="text-white tracking-wide text-center font-bold text-2xl mt-8">Hookah from the world brands</h3>
      <Link to="/hookahs"><button className=" cursore-pointer w-32 h-10 border-2 border-white rounded-lg text-white mx-auto text-center text-2xl mt-5">Shop now!</button></Link>
  </div>
  <div class="col-md-6 mt-sm-5 mt-5">
  <img className="mt-5 w-full h-96 m-auto bg-contain bg-gradient-to-br bg-no-repeat" src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/QRN3JBLEVJAXDJCE55ZY3EAXQE.jpg"alt="hookahimage"/>
      <h3 class="text-white text-center font-bold text-7xl -mt-80 sm:text-8xl">Tobacco</h3>
      <h3 class="text-white tracking-wide text-center font-bold  text-2xl mt-8">Tobacco from the best producers</h3>
      <Link to="/shisha"><button className=" cursore-pointer w-32 h-10 border-2 border-white rounded-lg text-white mx-auto text-center text-2xl mt-5">Shop now!</button></Link>
  </div>
  </div>
  <div class="row">
  <div class="col-md-6 mt-sm-5 mt-5">
  <img className="mt-5 w-full h-96 m-auto bg-contain bg-gradient-to-br bg-no-repeat" src="https://cdn.create.vista.com/api/media/small/271921690/stock-photo-top-view-hookah-exotic-fruits"alt="hookahimage"/>
      <h1 class="text-white text-center font-bold text-7xl -mt-80 sm:text-8xl">Accessories</h1>
      <h3 class="text-white tracking-wide text-center font-bold  text-3xl mt-8">Accessories for hookah</h3>
      <Link to="/accessories"><button className="cursore-pointer w-32 h-10 border-2 border-white rounded-lg text-white mx-auto text-center text-2xl mt-5">Shop now!</button></Link>
  </div>
  <div class="col-md-6 mt-sm-5 mt-5">
  <img className="mt-5 h-96 w-sm-full m-auto bg-contain bg-gradient-to-br bg-no-repeat sm:w-full" src="https://img.freepik.com/premium-photo/metal-kalaud-with-coconut-charcoal-cubes-sparks-black-background_372065-265.jpg?w=740"/>
      <h3 class="text-white text-center font-bold text-7xl -mt-80 sm:text-8xl">Chsrcoal</h3>
      <h3 class="text-white tracking-wide text-center font-bold text-2xl mt-8">Chsrcoal tobacco from the world</h3>
      <Link to="/chsrcoal"><button className=" cursore-pointer w-32 h-10 border-2 border-white rounded-lg text-white mx-auto text-center text-2xl mt-5">Shop now!</button></Link>
  </div>
</div>
</div>

<div class="mt-32">
<h2 class="text-center text-5xl cursor-pointer">Top selling</h2>
<div class="container text-center mt-5 mx-auto">

<div class="row row-cols-1 row-cols-md-3  w-full mx-auto">

{
              productsy().map(product => {
                return (
                  <div class="col-sm-8">
                  <div class="border rounded-3xl shadow-lg py-10" key={product.id}>
                    <h5 class="mx-auto font-semibold text-lg text-center border-none rounded-2xl w-32 h-8 text-black bg-amber-600">top selling</h5>
               <img className="mt-5 w-80 h-60 m-auto bg-contain bg-gradient-to-br bg-no-repeat"src={product.image}/>
               <div class="mt-5"></div>
        <div class="card-title m-auto ">
        <div class="card-body w-44 mx-auto">
          <p class="font-semibold text-2xl text-center">{product.name}</p>
          <div class="stars text-center text-amber-600">
            <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <span><i class="bi bi-star-fill"></i></span>
                <small class="text-slate-400 pr-3"> {product.star} comment</small>
            </div>
          <p class="card-text text-center mt-2 text-xl">{product.material}</p>
          <p class="card-text text-neutral-500 text-3xl pb-4">{product.price}$</p>
        </div>
        </div>
      {cart.some((p) => p.id === product.id) ? (
         <button type="button"className="w-32 h-12 border border-black rounded-lg bg-zinc-800 text-white  mx-auto text-center text-xl mt-3 cursor-pointer" onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: product
            })
          }
        >
          <i class="bi bi-trash3 text-4xl text-white"></i>
        </button>
      ) : (
        <button type="button"className="w-32 h-12 border border-black rounded-lg bg-zinc-800 text-white  mx-auto text-center text-xl mt-2 cursor-pointer" onClick={() =>
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
         Buy now
        </button>
      )}        
      </div></div>)
      
    })
    }
  </div>
  </div>
  </div>
<div class="mt-10">
<h2 class="text-center text-5xl mt-20 cursor-pointer">Why Us</h2>
<div class="border-b-4 border-amber-600 mx-auto w-40 py-1"></div>
<p class="text-stone-500 text-center text-2xl mx-2 mt-10 sm:text-xl">A great about us block helps buikts trust between you and your customers.The more content you provide about you and your business,the more confident people will be when purchasing from your store</p>
</div>
<div className={styles.Home}>
<div class="container text-center">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-10">
<div class="">
    <div class="w-72 h-36 border border-black rounded-lg text-black mx-auto text-center text-xl mt-5 cursor-pointer">
          <div class="mt-3 w-16 h-20 mx-auto">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEVUlEQVR4nO2Za4hVVRTHf6PjhJOOGdiXMB/Yh5A0Q+2DlWCKj1DoIWGRmGhEIZpJZvmIIAfFBz7QRFGpL9KHyQhLyQciMQoig6hBYClqvtPSMR2dubHgv2FxvNd7Zu7j3Evzhw337nP23mft9frvtaEd7WhHKWMgsAI4AJwEGoDNwKtARWsnewdYBIwAqikOXgB2AakHtAZgQIy5egM97Mc1N7gJ+AWoBcYBNXkW4CVgn1vP1l6lTXwSGArMAc7o+V/AJ0BfjX8UGAUsAH4ALuq9c/ZwCLASOAzci+zKPfXb83dzaO9rg8K8V4D5QLcMAncGfsqisdCuAmuiE9RIE7VauCnmZHHbJWAu0DWmBscC24A/gX+B89Ko+dUkoF9cU6iW2j8HNsRsG6VqL8AF4CPgYcoAHYDxwJGIAHOLGERyFmAi8KsT4DQwU7Ze8ugETAZ+cwL8IQEeogzQUVHotBPAtPE2UEkZ4TsnwFHgDZlXWaGnC6OvtIVGCBY2J0i7iaAG+AdoAT5s5dhq+dR+jbcN2Q5UkRCmAM36kG+BXlnef0755W9nkjdEP+z390kK85rjaE36mA+AMcBIhePaSEi2Vg9MU2Z/WiaauDCPA5uAO1loyWVRiv5p5igZYRCFtqPAemAn8DNQJ42MUL55EAZI2JIQJld4YX4sl4SaCe3ClPI5/nIhzKw6hwzeVjyjU2ReAoDlihPKwpbMvgG6U8LCbFNFYxkwVWf4GY5GXHC5or7I/GhQBmE6qCBhR+FZOtBxPUMia1FFw/AEcEr9LxdRkCDMVSeM+c3tyLca5eExMdH54k5h9+2I6vGF+lcXoEyUDc86bhY22c5Du4Gv9P334YbKQD4jm7PvcRM1J+Azk9zuW1EuK05qwPPOHjc6AY6IyqdEySuKSIVScoVY+NRJbqTwoP43AqMdYTyr/mEUBxO03rG4AywqbU3j+Fa489igZytdSTNfmC6fWCDq8qaip633cWsn668wnFKFz6OrM8HQ9ilw5APvZYiku2Kw6bSoVDI0jbyovm66Bgjmt8OFx715EqTSVWlOaI3puVZpFmvC29qR864IZxX0UJQI4bFPfmShXvPFuVqIhU7yh3BOT6mg/FTkvVA9X6fSf5wSUYWCyaFwx+HM+o42L+/14p4qPIRLGI/hwM005/M4eaZB71vFfZEsIGh3LQWC2egtFRyGudunRvfxi519fx1jzvEZHLuu0MXvpVrornYz8B4LAF0cN2tSoPAm1j0Dy7Xxv6tuPEslpILDtLJEmgm7dzxiyxU6HDW7/rf0rnE2j+XqN8qTCCp1rRZYqcfsNFl4pBN8p5h1ndPuYBJEX+WYm/KVjiqltqhZfdhjRxpfaJS2EscW91F33e8v07y7Xs+2impMjYTdRGEmNk+U5bqLWJdUSQx4xN0tmvZKHlXymZRMzpz5M8fNDpfTfUqVckjUH47FPRSVGiwfLFQd+PW2Mlf+T/gPNf+w+3qK0+wAAAAASUVORK5CYII="/>
          
    </div>
    <h3 class="-mt-2">Customer policy</h3>
    </div>
    </div>
    <div class="">
    <div class="w-72 h-36 border border-black rounded-lg text-black mx-auto text-center text-xl mt-5 cursor-pointer">
          <div class="mt-3 w-16 h-20 mx-auto">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEHklEQVR4nO2af4hVRRTHP+666uqSbCnlb1i3YgNZCqOUVVZTVEoMUrP+yZAUAwsksAQRf6Liam0Rriv6j6WJRkQogvSDwIQykn6RKPgDRdHALWtX3+4+OfC9MFzue+/e9969b1f2A5fHzpyZe87cmXNmziz0cf8xHngZWKbfGnoZ04BTQDrgsfJGegGrgW4pfRM4DOzS798qt/r36MEsl6IpYBUw0Fc/SAakJGdTrscxEvhPo70gh+wiyd0GRkR8TwUxs0mj/ElI+YOS3xBC9mFgLfAb8A8wjhj5RYpNDSnfKPmfs8j015oz5V2HMZYYadNLHggpP1TytzLUVwFHHeXb9HuamPFGzRQIS7UeP5WO+74GvAR8pL/tC8XKr3rRMyHlK7MY3aK+/gQeUdlfKqsjZrZp9Gb6ykcDS6TcD8BV33y/o3Y/AnuBjfJot5y1MEqyFodiZ5hG2RgMvKHp4QVH/9MVsIjdZ6XTtw2OlZ0slrI2V2dkqS8H3tIIewrZyH4GrACmAI8BDzltyoAHgQnAq8BWYL08lscrjiEDCjGgTMpYZ9czyNRp6ngGmDt+LSC658Msp98LGtCCth43gBcC6t8E2iVzHphN8ZkDnHAMatEMiMRpNX4xoG6dM+ebgSHEyzwNaFq7g35RGt9WQ1vELq+rvAOYT3I8ClzJJ654jcwNeoyTgd3aBCbN09pFd8iwSBu8JqfMW/y7KR07pcO+sA3qZbk1apUb7QT+VfwoFWM0I9qiuOWFjmfyHtv/lJoz0uW5KI2eAI7IQ1njBpLB3OzHwFlthVxPtdk3uBaAP/UF3UAqZUh7oVE2AhYAXWWnO3W2K/gKuOuTORRmveQ6ECVpiJ8ayZhHzcpcCX5JctjUskh+SZ4zVxD0DA41OgfouaTDGLJQQhZHerUh0yX0Lb3ckNGOm4s9x5QHVc7JMyd/SPh5Ss9AHcR+0hHiRpQZs0rC31F6Pgg4Jv8OPB6mcbUS1GmdAktFnQJhpw58Nb4deiiWyBDL9z5J8pQD30gHy/YXxB51dBGoJVm2Owm84cVYaN87HT5FMl/ifb3zboRcc07sjH7Mccl2RohzTZxyjtd5Z1MyYfHka73AzvFxUK/1aO+4HOf1nRdb/CnTYtGk/r9QJj8WnnXWSUWGlNEVbf336G/LSC7V77vADmC/zuF2xvDztt7xOQncVpkSfiZmye9meoIORSMUL9p96dSi8qEUaFZ6NeiKwNzlJH2FNfI8LYrMW4B3gMVaxCnnOsGjVnVdEe9gItHgnOMv6WqgVhkW76Yp1JZBXyOtO8NB+kcD84qdzhqJFTs5nnOmR7fjZY5H6GeyBsWe/53+OvQFY1voLv30dVq1F+tS4jnq/mepLnVSukqwJHrQFV1i2NQoZFCSytL00Qd5cA8ciFvufm/qcQAAAABJRU5ErkJggg=="/>
          
    </div>
    <h3 class="-mt-2">Favorable prices</h3>
    </div>
    </div>
    <div class="">
    <div class="w-72 h-36 border border-black rounded-lg text-black mx-auto text-center text-xl mt-5 cursor-pointer">
          <div class="mt-3 w-16 h-20 mx-auto">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZElEQVR4nO2Yz0sVURTHP69nBmY/oJ5YYNSuXVngpkUZRD8gQinatTL6C7KsRakFrdpIi1ZBbUKwn7uoTS7KfqhkkVhgbbIWYj2z3/biPr4Tl+HNzJv33ugI84GL473nzj3nnXPPPXcgISFhPqgDuoEh4KvaINAFZFggHASyQM6jfQFaWQBG/JXCN4HtwFK1HcAtjc0CLcQ4nLJS9LiP3AnJfAZWE0O6LU8EcUeyncSQYSlnwimIZsmaBBA7pqVcbRGyyyRrQjF2ZEMYstzKYLFjSMqZ7BTETsk+J4Z0STmTYoO4K9mzxJCMQiWnFOtFh2SmgFVRKVMF9KuZ57C06rDLKcU2a8/UKpwcTxiZA0TIEauUMM+l0KLDzqtEmSrBiM3AiMf7Xmj8P8YDY5bAWIleQSd2pzbztDLaM+2JUsLpic8PY9pAIW+MWQaV6pVK81v6VLv6q9VvxvOkgVFLeceoN2V4pZLk1ALHbG+k1cJ4ZQXQA0wEhIDTTIX8TvXZkkoZkvZQ2jauKqDq9dqIxbR7BUKmJEPc3nAoxiu2Ea+ArUCKYNJKx44HrwXM+1XMHnH2hl97GWDEiP4PS6NVo53zkElpr/rp99EIfirCkMEIjHDYa2WltgJGXC1Cv7whtz1qpJXAGY2ZjwcNERjh0GaFyB6r/7TrEF3smufobv7m4/qPOvqA3a5Y7NVYb0RGuG+YWYXcPpUys3p2qAH2AzescsfYkOcw8N1y1TiwS2MN8ojpfx+REe4w+iAvmOdTlsxRYNLS0+h8yP2itcBJbeycMoXxjv3BICojHKqBB9ZafVY263DVV+1Avd/LFgEXNGFCtzmzwCPVNG4j1isZmIo5LP2qwepch+sA8FhXYsM2hb8Jo2NhFkhpEWPMeR+5JmUMvwPLDzu9e3m5xjrPvFK0L00qJb4B6zzuHjOuNBgWe+5rYE0BmR6NDxdRAXhyXS+54upvty5QlytgiFcmbNaP+RPYRBlsAH5I6S2quS5ZhZ9z5y7XkIw2cE6eqddn1rfqM+dJ2Vy0DqVxPc+4PkSXawiuM2rSSvVPK3WVMCf8fWvRUe0fL4XC4J6XKbDWRipISi9sLFAmFFKoWArNSwWsFSmVNGReSQwh8Ug0JKFFElrRkIQWMQutfuDhHM5LSGCO+Ae+lacdgyGx3AAAAABJRU5ErkJggg=="/>
    </div>
    <h3 class="-mt-2">Large selection</h3>
    </div>
    </div>
    <div class="">
    <div class="w-72 h-36 border border-black rounded-lg text-black mx-auto text-center text-xl mt-5 cursor-pointer">
          <div class="mt-3 w-16 h-20 mx-auto">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD5UlEQVR4nO2ZuWsWQRjGf0k80RiMpYoJeGEatRPxajxSeWETjOCJgkcpWIR0SRqv+B+oqIWKfTQYRUEbE4yKWngiIqImEG38ZOAZeA17zO5+xZfwPbCw78yzs+/svNfMQhVVVJEFpQl2xWLSTOSpCO+AJVQelki3knSNRQPwQMTPwHwqB/OlU0k6Ol0Tcd2Q66gc1AL3pNvNNPI+EX8ATVQeFgLfpWN7HGku8FOk41QujkvHn9I5EjdEup/TrGqANUA30C+bHgNGgRcyjU5gdc5J1Em3knSNxTzgo4inM9pvG/AyQ+h03F2afChO69mP0jURh0T+DTQGvqDLKPge6AFaFWlmArOAZcAW4KI4nv8w0B8bpVNJOibCvfS5yOcJh1uNxwoWISbpOAfM6n8F1gc8d17859K1ODEB04A9wFWZz6gud39FfY7jMBu4rXf+CZhM0IfOtHQx2Am8DfCPN8AO41/nzMo0l8P0Q5ypVj7RNq6txyj6DDgBrJB/uKsFOAkMGl6Xnq01K/MwIQAEB6OQ8Nam/kemrcd8pSNSLA6u76hZfTcZh3rgk9rcyhZOD0kJp8aEWOfY6KV+EhsIx0Yzme1qOyh5uGjCbjLkqBJgjQmxdXJa7xNuJbLimJ59DUzVmB/UtjKC324+clMRs+pWvzMlFIG8TySZU9I7hzTGbrX1Su7Ia14NxpHOxAzSr36X7FCILcmx8+KUxrgseZvkvhj+GROQYkv5zcBfxfRVEf1+P7BA8ivJLjrlRYspWVAFYGWLVdLtr3QlJCkORyTFMfXNkDwi2SW2vKjXGG4sNJaVPWaY0O3yTiqSsvsv9dXHyHkxIJu3E3Nj5y6f0kzLm9LSMprWeCwralohzn5X/VslX5HsMna50FrU2UPCb6f6L4wLv4M5w28UeouG35CEuDoiIb5Rmys7imJKORJi1hJlv9p2mBLFlR1FcKhcJUqIee1S/wcTdrvMZI7l3O/PMUWjL/FzF40hZXyNSm3Hu2XKcLvdHVLGbgnMMe75O+Y8jSJlfJaNVZM2QY571jj6dhWA4zdSAymT8LnrK7CoHBurLFvd9YrpfmX8l5+qAvCyjoBGTLKLMie/Em6sdSnvDE6K000ZEHL4sBb4YszxsCJPGmoVgbxPfAM2BTx3IaF8Knwc1Gx8xofmXlWxy7VSs3Xvkt0lE2K9T6SZU+YzhbwHdDXaKQ4HHDz4azghOhU+oCt6ZIoSWYdKDO8jI7rvU19UsgtB0JHppDrEbjd7gcVUHprNx96bRr5WwT96+kN/9DQoeVX6r7eBtF9vTybQz9AnScTSBLtiMWkmUkUVVfAf/gGQc1nDyfmVoQAAAABJRU5ErkJggg=="/>
    </div>
    <h3 class="-mt-2">Multi-stage control</h3>
    </div>
    </div>
    <div class="">
    <div class="w-72 h-36 border border-black rounded-lg text-black mx-auto text-center text-xl mt-5 cursor-pointer">
          <div class="mt-3 w-16 h-20 mx-auto">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0UlEQVR4nO2Za4hVVRTHfzM1almWFg5pCWaBozj0IKSXVhOllWX2ITOtLwmhET1ojMKKiAinwqCMoAwsTPsg9IIizMjsaUNlTZnRwxh6qj2mzCbnxIr/gX+He4c799E9Q/3hcO9de5+917p7vTf8j39gDHAj8BjQziDFCcAWYCewR99zhxHAUqAT6NHzOnAVMIRBgsnAV0BS5OmUSuUaBwGfi+FXgdOA/YEDgdnARxp7J+8nc5MYfR8YWkTQVJjF5BidYvL8AmPTgOnAhZoTNpNb/ComR2fo80X/HThE33+uwf5nAPfVSpAGYJvc7MVSr2oK0ghcBLxlDqWtFqp1MvAScIR+z9Gc1yrcK2zwCmCrCbBHny/UwtiP0r8WONg2XlRBjLoB6DYBPpPzGKOTDtpx5Sx+rG2Sut9N0tnhos8xITYDTQPcoxm4E9hlArwLzAP2tXkdGlszUCEOA7oyAfHLfgLiZr0zXh5sLnASsF+R9ScADwK7bY0NwAzZXxZjpWJ/6t2SsQT4IUOLAHizmP5FzyapU5tcb1bA7UBr5pTXiKEY3wusA6aWwNPDeif+gJKxUm61FIQT6NUmPwLrgceVg43UnOkyVjfgR4CJA+BpogTfLZUsCWF4H5Q4d4uY65DdFMK9FnM6pCrlYJ3WCbuqOn7S4qMy9DNNZcJN/6GTO7KCvaZqr139/Gll49kCujtUTPda/vWo5j1Q4X4btE5oTVXRKpXpA642+q2ixab3a178/q1AujMQzNCa3UWS2IpwvRnyCosB88zFhrG/rO93VLBXg2JNoiygqmhUypIK86J5rBOBb0RPvdtOufNycYnW2WoZRtUQnmiHCbPN3OtYFV4eY+IUy8U+wKdaJ5LLqiP9p9JnhypKdAJrbew7pTjl4nat8yY1wuqMMOF2r7TxNos9iQLolAGsPw14zhxJrN9SAzn+zoa3a5MeY3ilCjDkDBYpDUqUsqyw8SzCDi5QmZDY2suBcdQQp4q5XkX1HgtkS6xJEQ7hLqs5suNNwGXAhybA98Bt/QhdddytjT8Gjs/kWsHYWTZ3UmY8KsP2TAvqC8WpKCH+VUSwes9iS2AW8Ikx9zRwtL0zy7xRYgXd/DJqnapiikX9c0QbovQizdFCrZZZ7tRi9f+5ReqTuuA6Uw1Hs2qMvRqPoHmtcra0GZgrNJqaFELU4a9k1CmcxExyiEKCjDPX2aACrdPsYhiDRJBvZSceDEdbo2N1nuyjP0HcrXrp2qKSOQFuYRAJEs/b6vCnOFsBtU/5Wy5wuLnZYieSqGHhqnSNJZe5wD1i6AmjHWreqdU6icF8iglWCdYdI43JtHOJcqVE9T66PE10gZpitmjPkwMsLcDMcCV+QT9FtOX6vaTAu8uoMyIOfC1mTi+g+28Ybb1oaRoTeFK0BdQZiy2TTdFkxh0JoseUxK4pAul13jHUEV5Tezl7uWhd1jRotlqkoUBfbBh1RKEuR4OVuCGQdySDttFo4RgSnUpd8ZQYWWi086xD77XFQtEfMlpUhYnspK7oEiPeFNgoWqTqjgUZVxxYJVq45boibfusUtO63dpDB2TmjrKaPsrdZywTGE+dMclug9OnL2Mbjpm6OPIOyaXkBJMVCLtV7cWVXH8YoV7xXF3j8Z/HX6WPu3TrOVJ8AAAAAElFTkSuQmCC"/>
    </div>
    <h3 class="-mt-2">Delivery</h3>
    </div>
    </div>
    <div class="">
    <div class="w-72 h-36 border border-black rounded-lg text-black mx-auto text-center text-xl mt-5 cursor-pointer">
          <div class="mt-3 w-16 h-20 mx-auto">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA30lEQVR4nO3ZSw6CQBAE0DoG4JHwOH4OgNfSOwkucNWGpIiJ/Ew0sQbrJbNqF92pwYQGMDMzs1FbAGcANwAhdhr2VmLBSaDZePNUc0l0P2gB7ADk0JMD2LPHmErmwmI3hLoDe+2u2UDDYgZ9GXutx4r93UtFTPW7ukEisTPw64Y8iBNBIs9IKsKDrCGR+PY99iBPfkbUhP+1xIQTERNOREw4kVQSqVlQXMy92rDX66DCZVdwk6fuOLegK1lsuckroKfgEHf2OrnMrgReXePTJXavZGT9CjXJzwpmZmZ/6QH2xwppLKlXMgAAAABJRU5ErkJggg=="/>
    </div>
    <h3 class="-mt-2">Convenient payment</h3>
    </div>
    </div>
    </div>
</div>
</div>    

    <div className="w-full mt-20">
    <footer class="d-flex  flex-wrap justify-content-between align-items-center my-0 border-top bg-zinc-800 ">
    <p class="col-md-4 mb-0 text-white">© 2022 vicamikhnevich</p>
    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    </a>
    <div>
    <ul class="d-flex flex-wrap cursor-pointer p-2 mt-3 mr-5">
          <a href="#facebook"><li class="mr-5"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook text-white" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg></li></a>
          <a href="#youtube"><li class="mr-5"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-youtube text-white" viewBox="0 0 16 16">
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
          </svg></li></a>
           <a href="#telegram"><li class="mr-5"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telegram text-white" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
          </svg></li></a>
           <a href="#instagram"><li class="mr-5"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram text-white" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg></li></a>
    </ul>
  </div>
  </footer>
  </div>
  </div>
 
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
