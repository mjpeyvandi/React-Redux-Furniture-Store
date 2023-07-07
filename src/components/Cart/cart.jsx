import React from "react";
import "./cart.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

export const Cart = () => {
  const [cartProducts, setcartProducts] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  // Read data cart
  const dataHandler = () => {
    fetch("http://localhost:8000/carts")
      .then((res) => res.json())
      .then((data) => {
        setcartProducts(data);
      });
  };


  //calculat total
  const totalHandler = () => {
    let price = 0;

    cartProducts.map((item) => (price += item.price * item.quantity));

    setTotalPrice(price);
  };

  // Remove product
  const removeProduct = (id) => {
    fetch(`http://localhost:8000/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  // increament quantity
  const increament = (id) => {
    fetch(`http://localhost:8000/carts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const currentQuantity = data.quantity; // دریافت مقدار قبلی quantity
        const newQuantity = currentQuantity + 1; // افزودن یک عدد به مقدار قبلی
        return fetch(`http://localhost:8000/carts/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // Include any other fields you want to update, such as the quantity
            name: data.name,
            price: data.price,
            img: data.img,
            quantity: newQuantity, // ارسال مقدار جدید به سرور
          }),
        });
      })
      .then((response) => response.json())
      .then((data) => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  // decreament quantity

  const decrement = (id) => {
    fetch(`http://localhost:8000/carts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const currentQuantity = data.quantity;
        const newQuantity = currentQuantity - 1;

        if (currentQuantity > 1) {
          return fetch(`http://localhost:8000/carts/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: data.name,
              price: data.price,
              img: data.img,
              quantity: newQuantity,
            }),
          });
        } else {
          throw new Error("Quantity cannot be less than 1"); // پرتاب خطا در صورت عدم برقراری شرط
        }
      })
      .then((response) => response.json())
      .then((data) => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    dataHandler();
  }, []);

  useEffect(() => {
    if (cartProducts) {
      totalHandler();
    }
  }, [cartProducts]);

  return (
    <div>
      {cartProducts && cartProducts.length > 0 ? (
        <div className="cart__content">
          <div className="boxes">
            <div className="box__carts">
              <h3>Shopping cart</h3>
              <div className="box__product">
                {cartProducts.map((product) => (
                  <div className="details__product" key={product.id}>
                    <div className="left__info">
                      <MdOutlineCancel
                        className="cancel__icon"
                        onClick={() => removeProduct(product.id)}
                      />
                      <img src={product.img} alt="" className="img__product" />
                      <span className="txt__product">{product.name}</span>
                      <span className="price__product">
                        {"  $ " + product.price}
                      </span>
                    </div>
                    <div className="quantity">
                      <p className="text__quantity">Quantity</p>
                      <button
                        className="btn__quantity"
                        style={{ width: "2rem" }}
                        onClick={() => decrement(product.id)}
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className="btn__quantity"
                        style={{ width: "2rem" }}
                        onClick={() => increament(product.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="box__totals">
              <div className="totals">
                <h3>cart totals</h3>
                <h4 className="txt__subtotal">
                  {" "}
                  <small>Subtotal</small> {"$ " + totalPrice}{" "}
                </h4>
                <h4 className="shipping">
                  {" "}
                  Shipping
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quos, veritatis.
                  </p>
                </h4>

                <div className="total">
                  <h4 className="txt__total">Total</h4>
                  <h3> {"$ " + totalPrice} </h3>
                </div>
                <button className="btn__checkout">procced to checkout</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="box__empty">
          <p className="txt__empty">
            Your cart is empty, Please add Product to cart
          </p>
          <div className="box__back">
            <Link to={"/"} className="back">
              {" "}
              <IoIosArrowRoundBack className="icon__back" /> Back to the Store{" "}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
