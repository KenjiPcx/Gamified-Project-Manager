import React, { useState, useEffect } from "react";
import Header from "../components/headers/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGifts } from "@fortawesome/free-solid-svg-icons";
import ProductItem from "../components/rewardsShop/ProductItem";
import ProductObj, {
  FoodProducts,
  TechProducts,
  HolidayProducts,
  EntertainmentProducts,
} from "../components/rewardsShop/ProductData";

function RewardsShop() {
  const [balance, setBalance] = useState(1000000);
  const [pageNo, setPageNo] = useState(1);
  const pages = [1, 2, 3, 4];

  const productMapper = (productList: ProductObj[]) => {
    return (
      <div className="page">
        {productList.map((product, key) => {
          if (product.duration) {
            return (
              <ProductItem
                name={product.name}
                duration={product.duration}
                price={product.price}
                key={key}
                balance={balance}
                setBalance={setBalance}
              />
            );
          } else {
            return (
              <ProductItem
                name={product.name}
                price={product.price}
                key={key}
                balance={balance}
                setBalance={setBalance}
              />
            );
          }
        })}
      </div>
    );
  };

  const scroll = document.querySelector(".shop-body");

  const setPage = () => {
    if (scroll) {
      setTimeout(() => {
        console.log(scroll.scrollLeft);
        if (scroll.scrollLeft > 900) {
          return setPageNo((prevVal) => 4);
        }
        if (scroll.scrollLeft > 500) {
          return setPageNo((prevVal) => 3);
        }
        if (scroll.scrollLeft > 190) {
          return setPageNo((prevVal) => 2);
        }
        return setPageNo((prevVal) => 1);
      }, 500);
    }
    };
    
    const getPageName = () => {
        if (pageNo === 1) {
            return "Food"
        }
        if (pageNo === 2) {
            return "Tech"
        }
        if (pageNo === 3) {
            return "Entertainment"
        }
        if (pageNo === 4) {
            return "Holiday"
        }
    }

  return (
    <div className="rewards-shop-page">
      <Header pageTitle="Exchange Shop" />
      <div className="main-content">
        <div className="shop">
          <div className="shop-banner">
            <div className="info-container">
              <div className="title">Reward yourself for your hard work. </div>
              <div className="points-balance">Gold(G): {balance}</div>
            </div>
            <div className="logo">
              <FontAwesomeIcon icon={faGifts} className="icon" />
            </div>
          </div>
          <div className="shop-catalog">
            <div className="shop-header">{getPageName()}</div>
            <div className="shop-body" onTouchEnd={setPage}>
              {productMapper(FoodProducts)}
              {productMapper(TechProducts)}
              {productMapper(EntertainmentProducts)}
              {productMapper(HolidayProducts)}
            </div>
            <div className="page-tracker">
              {pages.map((page, key) => {
                return (
                  <div
                    className={`pagination-dot ${
                      pageNo === page ? "active" : "inactive"
                    }`}
                    key={key}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardsShop;
