import { useEffect, useReducer,useState } from "react";
import { cartReducer } from "./reducers/cartReducer";
import ReactDOM from "react-dom/client";
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter as Router, Routes, Route,Link,Outlet} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import MainPage from './components/MainPage/MainPage';
import Home from './components/pages/Home';
import Features from './components/pages/Features';
import Pricing from './components/pages/Pricing';
import FAQs from './components/pages/FAQs';
import About from './components/pages/About';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Cart from './components/pages/Cart';
import Layout from './components/pages/Layout';
import PrivateRoutes from './components/utils/PrivateRoutes';
import PersonList from './components/PersonList/PersonList';
import Hookah from './components/CatalogPageHome/Hookah';
import Shisha from './components/CatalogPageHome/Shisha';
import Chsrcoal from './components/CatalogPageHome/Chsrcoal';
import Accessories from './components/CatalogPageHome/Accessories';
import ShishaVideo from './components/VideoPageHome/ShishaVideo';
import HookasVideo from './components/VideoPageHome/HookasVideo';
import СharcoalVideo from './components/VideoPageHome/СharcoalVideo';
import AccessoriesVideo from './components/VideoPageHome/AccessoriesVideo';
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    productrs:[],
    products: [],
    cart: []
  });

  const fetchProducts = () => {

    dispatch({
      type: "ADD_PRODUCTS",

    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (

    <div className="App">
  <Router>
  <Header/>
              <Routes>
         
             
                    <Route element={<Home state={state} dispatch={dispatch}/>} path="/" exact/>
                    <Route element={<Catalog state={state} dispatch={dispatch}/>} path="/features"/>
                    <Route element={<MainPage/>} path="/features"/>
                    <Route element={<Pricing state={state} dispatch={dispatch}/>} path="/pricing"/>
                    <Route element={<PersonList/>} path="/personList/:id"/>
                    <Route element={<FAQs/>} path="/fAQs"/>
                    <Route element={<About/>} path="/about"/>
                    <Route element={<Layout/>} path="/layout"/>
                    <Route element={<ProductPage/>} path="/products/:id"/>
                    <Route element={<Cart state={state} dispatch={dispatch}/>} path="/cart"/>
                    <Route element={<Hookah state={state} dispatch={dispatch}/>} path="/hookahs"/>
                    <Route element={<Shisha state={state} dispatch={dispatch}/>} path="/shisha"/>
                    <Route element={<Accessories state={state} dispatch={dispatch}/>} path="/accessories"/>
                    <Route element={<Chsrcoal state={state} dispatch={dispatch}/>} path="/chsrcoal"/>
                    <Route element={<ShishaVideo embedId="5YP7h6Uxdy8"/>} path="/shishavideo"/>
                    <Route element={<HookasVideo embedId="0KYEnlKN4hM"/>} path="/hookasvideo"/>
                    <Route element={<СharcoalVideo embedId="7j_ckFlSHd8"/>} path="/charcoalvideo"/>
                     <Route element={<AccessoriesVideo embedId="KMqFJ_6nAlI"/>} path="/accessoriesvideo"/>    

                <Route element={<Login/>} path="/login"/>
                <Route element={<SignUp/>} path="/signUp"/>
                <Route element={<About/>} path="/about"/>
              </Routes>
          </Router>
          
    </div>

  );
}

export default App;
