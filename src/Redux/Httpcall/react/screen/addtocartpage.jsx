import React from "react";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarhttp from "../Navbar/navbar";

const AddToCartPage = () => {
    const { cart } = useSelector(state => state.cart);
    
    const handleDelete = (index) => {
        // Dispatch an action to remove item from cart based on index
        
    }

    return (
        <div className="container-fluid">
             <Navbarhttp/>
            <h1>Add to Cart Page</h1>
            <div className="row d-flex flex-column ">
                {cart.map((each, index) => (
                    <div className="col-12  col-md-6 mb-3 d-flex flex-column" key={index}>
                        <div className="card w-100 d-flex flex-column  border-danger">
                            <img src={each.thumbnail} width={250}  alt={each.title} />
                            <div className="card-body">
                                <h5 className="card-title">{each.title}</h5>
                                <p className="card-text">{each.description}</p>
                                <p className="card-text"><strong>Price:</strong> ${each.price}</p>
                                <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddToCartPage;
