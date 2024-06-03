import Navbarhttp from "../Navbar/navbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsListingAction } from "../../redux/action";
import "./index.css";
import { AddToCart } from "../../redux/Cart/action";
import { Link } from "react-router-dom";

const Home = () => {
  const reduxstate = useSelector((state) => state);
  const {
    products: { products },
  } = reduxstate;
  const {
    products: { loading },
  } = reduxstate;

  const [render, setrender] = useState(null);

  const { toggle } = useSelector((state) => state.cart);
  console.log(toggle, "toggle");

  const { cart } = reduxstate.cart;
  console.log(cart, "Cart");
  // console.log(reduxstate, "reduxstate")

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsListingAction());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    console.log(product);
    dispatch(AddToCart(product));
  };

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <>
      <Navbarhttp />
      <h1 className="header">Product Listing</h1>
      {loading ? (
        <h1 className="loading">Please wait for some time.......</h1>
      ) : (
        <div className="product-list ">
          {products.map((each, index) => {
            const inCart = isProductInCart(each.id);
            return (
              <div className="product-card" key={index}>
                <img
                  className="product-image"
                  src={each.thumbnail}
                  alt={each.title}
                />
                <div className="product-info">
                  <p className="product-category">{each.category}</p>
                  <p className="product-title">{each.title}</p>
                  <p className="product-price">${each.price.toFixed(2)}</p>

                  {inCart ? (
                    <button className="add-to-cart-btn bg-warning">
                      <Link
                        className="text-decoration-none text-dark"
                        to={"./cart"}
                      >
                        Go To Cart
                      </Link>
                    </button>
                  ) : (
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(each)}
                    >
                      Add to Cart
                    </button>
                  )}
                  <button
                    className="add-to-cart-btn ms-2"
                    // onClick={() => handleAddToCart(each)}
                  >
                    <Link
                      className="text-decoration-none text-white"
                      to={`${each.brand}/${each.id}`}
                    >
                      view product
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default Home;
