import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { productsListingAction } from "../../redux/action"
import './index.css'; 
import { AddToCart } from "../../redux/Cart/action";
import { Link } from "react-router-dom";
import Navbarhttp from "../Navbar/navbar";

const Httpcall = () => {
    const reduxstate = useSelector(state => state)
    const { products: { products } } = reduxstate
    const { products: { loading } } = reduxstate
    const {cart}=reduxstate.cart
    console.log(cart,"Cart")
    console.log(reduxstate, "reduxstate")

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(productsListingAction())
    }, [dispatch])


    const handleAddToCart=(product)=>{
        console.log(product)
        dispatch(AddToCart(product))
        

    }

    return (
        <>    
            <Navbarhttp/>
            <h1 className="header">Product Listing</h1>
            {
                loading ?
                    <h1 className="loading">Please wait for some time.......</h1>
                    :
                    <div className="product-list ">
                     
                        {
                            products.map((each, index) => {
                                return (
                                    <div className="product-card" key={index}>
                                        <img className="product-image" src={each.thumbnail} alt={each.title} />
                                        <div className="product-info">
                                            <p className="product-category">{each.category}</p>
                                            <p className="product-title">{each.title}</p>
                                            <p className="product-price">${each.price.toFixed(2)}</p>
                                            <button
                                                className="add-to-cart-btn"
                                                onClick={() => handleAddToCart(each,index)}
                                            >
                                                Add to Cart
                                            </button>

                                            <button>
                                                <Link className="text-decoration-none" to={`${each.brand}/${each.id}`}>
                                                view product
                                                </Link>
                                                
                                                </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </>
    )
}

export default Httpcall
