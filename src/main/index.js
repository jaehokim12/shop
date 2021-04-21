import "./index.css";
import imagesbanner from "../images/banners/banner1.png"
import logo from "../images/icons/logo.png"
import product1 from "../images/products/keyboard1.jpg"
import product2 from "../images/products/basketball1.jpeg"
import axios from "axios";
import React from 'react';





function MainPage() {

    const [products, setproducts] =React.useState([]);
    React.useEffect(
      function(){

        axios.get("https://c555926e-c811-4837-a109-3a81c0b97a7c.mock.pstmn.io/products")
        .then(function(result){
          
          const products = result.data.products;
          setproducts(products);
            console.log(result);
        }).catch(function(error){
            console.error("에러발생 :", error);
        });
      },[])

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src={logo}/>
        </div>
      </div>
      <div id="body">
        <div id="banner">
           <img src={imagesbanner}/>
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {
            products.map(function(product, index){
              return (
                <div className="product-card">
            <div>
              <img
                className="product-img"
                src={product.imageUrl}
              />
            </div>
            <div className="product-contents">
              <span className="product-name">{product.name}</span>
              <span className="product-price">{product.price}원</span>
              <div className="product-seller">
                <img className="product-avatar" src="images/icons/avatar.png" />
                <span>{product.seller}</span>
              </div>
            </div>
          </div>
              )
            })
          }
          
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;