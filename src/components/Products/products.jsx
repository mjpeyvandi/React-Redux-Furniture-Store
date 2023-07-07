import { React, useEffect, useState } from "react";
import "./products.css";
import { Sort } from "../SortBox/sort";
import { View } from "../ViewBox/view";
import { Link } from "react-router-dom";


export const Products = () => {
  const [stateProducts, setProducts] = useState({
    products: [],
  });

  const [Category, setCategory] = useState("");

  const [countItemProduct, setCountItemProduct] = useState(6);

  const [typeShowItem, setTypeShowItem] = useState(false);

  const [rangeValue, setRangeValue] = useState(250);

  const handleCategoryState = (cat) => {
    setCategory(cat);
  };

  const dataLoading = (data) => {
    setProducts({
      ...stateProducts,
      products: data.map((item) => item),
    });
  };

  useEffect(() => {
    let url = "http://localhost:8000/products";

    if (Category != "") {
      url += `?category=${Category}`;
    }

    if (rangeValue != 250) {
      url += `?price_gte=${rangeValue}&price_lte=5000`;
    }

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dataLoading(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [Category, rangeValue]);

  const listShowHandler = () => {
    setTypeShowItem(true);
    console.log(typeShowItem);
  };

  const boxShowHandler = () => {
    setTypeShowItem(false);
    console.log(typeShowItem);
  };

  const showDataMoreHandler = () => {
    if (countItemProduct + 6 <= stateProducts.products.length) {
      setCountItemProduct(countItemProduct + 6);
    } else {
      setCountItemProduct(stateProducts.products.length);
    }
  };

  return (
    <div className="show__product">
      <div className="container">
        <div className="all__box">
          <div className="custom__box">
            <Sort />
            <View listViewItem={listShowHandler} boxViewItem={boxShowHandler} />
          </div>

          <div className="products">
            <div className="box__left__dir">
              <div className="box__left">
                <div className="box__categori">
                  <label htmlFor="" className="txt__categori">
                    CATEGORIES
                  </label>
                  <div className="list__categori">
                    <ul className="list__categori__content">
                      <li
                        className="list__categori__item"
                        onClick={() => handleCategoryState("design")}
                      >
                        Design
                      </li>
                      <li
                        className="list__categori__item"
                        onClick={() => handleCategoryState("lamp")}
                      >
                        Lamps
                      </li>
                      <li
                        className="list__categori__item"
                        onClick={() => handleCategoryState("chair")}
                      >
                        Chairs
                      </li>
                      <li
                        className="list__categori__item"
                        onClick={() => handleCategoryState("sofa")}
                      >
                        Sofas
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box__filter">
                  <label htmlFor="" className="txt__filter">
                    FILTER BY
                  </label>
                  <div className="filter_content">
                    <div className="filter__color">
                      <label htmlFor="" className="txt__color">
                        Color
                      </label>
                      <div className="colors">
                        <span className="c__yellow"></span>
                        <span className="c__blue"></span>
                        <span className="c__white"></span>
                        <span className="c__red"></span>
                        <span className="c__green"></span>
                        <span className="c__orange"></span>
                        <span className="c__banafsh"></span>
                      </div>
                    </div>
                    <div className="filter__range">
                      <label htmlFor="" className="txt__price">
                        Price Range
                      </label>
                      <small className="show__txt__range">
                        {"$  " + rangeValue + " to  $  " + 5000}
                      </small>
                      <input
                        type="range"
                        className="range"
                        min="250"
                        max="5000"
                        onChange={(e) => setRangeValue(e.target.value)}
                      />
                      <div className="box__txt__renge">
                        <small className="txt__range">$ 250</small>
                        <small className="txt__range">$ 5000</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="box__right__dir">
              <div className="box__product">
                {stateProducts.products.slice(0, countItemProduct).map((item) =>
                  !typeShowItem ? (
                    <div className="card__item" key={item.id}>
                      <img src={item.img} alt="" className="img" />
                      <label htmlFor="" className="name__product">
                        {item.name}
                      </label>
                      <label htmlFor="" className="price__product">
                        {"$ " + item.price}
                      </label>

                      <Link to={`/${item.id}`} className="link">
                        <button className="btn__buy">Buy</button>
                      </Link>
                    </div>
                  ) : (
                    <div className="card__item__column" key={item.id}>
                      <img src={item.img} alt="" className="img" />
                      <label htmlFor="" className="name__product">
                        {item.name}
                      </label>
                      <label htmlFor="" className="price__product">
                        {"$ " + item.price}
                      </label>

                      <Link to={`/${item.id}`} className="link__btn__column">
                        <button className="btn__buy">Buy</button>
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {countItemProduct != stateProducts.products.length ? (
            <button className="more__btn" onClick={() => showDataMoreHandler()}>
              MORE +
            </button>
          ) : null}
          
        </div>
      </div>
    </div>
  );
};
