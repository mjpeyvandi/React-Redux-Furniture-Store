import React, { useState, useEffect } from "react";
import "./header.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";

export const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/products?q=${searchValue}`
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchValue !== "") {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchValue]);

  return (
    <div className="header">
      <section className="header__top">
        <div className="header__left">
          <ul className="header__left__list">
            <li id="header__left__list__item">
              <GoThreeBars className="icon__h" />
            </li>
            <li className="header__left__list__item">Stile</li>
          </ul>
        </div>

        <div className="header__center">
          <ul className="header__center__list">
            <li className="header__center__item">
              {" "}
              <Link to={"/"} className="item">
                {" "}
                Collection{" "}
              </Link>{" "}
            </li>
            <li className="header__center__item">
              {" "}
              <Link to={"/"} className="item">
                {" "}
                Catalog{" "}
              </Link>{" "}
            </li>
            <li className="header__center__item">
              {" "}
              <Link to={"/"} className="item">
                {" "}
                About Us{" "}
              </Link>{" "}
            </li>
            <li className="header__center__item">
              {" "}
              <Link to={"/"} className="item">
                {" "}
                Blog{" "}
              </Link>{" "}
            </li>
          </ul>
        </div>

        <div className="header__right">
          <ul className="header__right__list">
            <li className="header__right__list__item">
              <BiSearchAlt2
                className="icon__h"
                onClick={() => setModalIsOpen(true)}
              />
              Search
            </li>
            <li className="header__right__list__item">
              <VscAccount className="icon__h" />
              <Link to={"/"} className="item">
                {" "}
                My Account{" "}
              </Link>
            </li>
            <li className="header__right__list__item">
              <FaShoppingCart className="icon__h" />
              <Link to={"/cart"} className="item">
                {" "}
                Cart{" "}
              </Link>{" "}
            </li>
          </ul>
        </div>
      </section>

      {modalIsOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <TfiClose
              className="s__icon__close"
              onClick={() => setModalIsOpen(false)}
            />
            <h3>Search Product</h3>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="s__input"
            />
            <div className="box__result">
              {searchResults.map((result) => (
                <Link to={`/${result.id}`} className="search__result">
                  <div key={result.id} className="search__result">
                    <img
                      src={result.img}
                      alt={result.name}
                      className="s__img"
                    />
                    <p className="s__name">{result.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
