import { BrowserRouter, Route, Routes } from "react-router-dom";
import Httpcall from "../screen/httpCall";
import AddToCartPage from "../screen/addtocartpage";
import Home from "../screen/home";
import Eachproductdetails from "../screen/Eachproductdetail";

const NavigationStack = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Httpcall" Component={Httpcall} />
          <Route path="/cart" Component={AddToCartPage} />
          <Route path="/:brand/:productsID" Component={Eachproductdetails}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default NavigationStack;
