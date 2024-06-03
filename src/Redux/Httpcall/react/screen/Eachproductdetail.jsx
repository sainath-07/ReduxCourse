import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarhttp from "../Navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../redux/Cart/action";

const Eachproductdetails = () => {
  const [eachproductitem, seteachproductitem] = useState({});
  const { productsID } = useParams();
  const disptach = useDispatch();

 const {cart}=useSelector(state=>state.cart)

  console.log(eachproductitem, "eachproductitem");

  useEffect(() => {
    fetcheachproduct();
  }, [productsID]);

  const fetcheachproduct = async () => {
    let result = await axios.get(
      `https://dummyjson.com/products/${productsID}`
    );
    seteachproductitem(result.data);
  };

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    images,
  } = eachproductitem;

  const eachproductaddtocart = (product) => {
    disptach(AddToCart(product));
    console.log(product, "product");
  };

  const isProductInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {images && images.length > 0 && (
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {images.map((image, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <img
                      src={image}
                      className="d-block w-100"
                      alt={`Slide ${index}`}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          )}
        </div>
        <div className="col-md-6">
          <h1>{title}</h1>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
          <p>
            <strong>Discount:</strong> {discountPercentage}%
          </p>
          <p>
            <strong>Rating:</strong> {rating}
          </p>
          <p>
            <strong>Stock:</strong> {stock}
          </p>
          <p>
            <strong>Brand:</strong> {brand}
          </p>
          <p>
            <strong>Category:</strong> {category}
          </p>
       

          {isProductInCart(eachproductitem.id)
           ? (
            <>
              <button className="add-to-cart-btn bg-warning">
                <Link className="text-decoration-none text-dark" to={"./cart"}>
                  Go To Cart
                </Link>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => eachproductaddtocart(eachproductitem)}
                className="bg-primary text-white border border-none"
              >
                Add to cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Eachproductdetails;
