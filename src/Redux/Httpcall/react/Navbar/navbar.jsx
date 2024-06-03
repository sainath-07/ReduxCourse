import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";


const Navbarhttp = () => {
  
           const {cart}=useSelector(state=>state.cart)
  return (
    <nav >
  
  
      <Navbar expand="lg" className=" bg-warning">
        <Container className="d-flex justify-content-center "  >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             
              <Nav.Link
                as={Link}
                className=" text-white"
               
                to="/"
              >
                Home
              </Nav.Link>
           
           

              <Nav.Link
                as={Link}
              
                to="/cart"
              >
                <button type="button" className=" btn btn-primary position-relative">
                cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              </button>
              </Nav.Link>

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Navbarhttp;