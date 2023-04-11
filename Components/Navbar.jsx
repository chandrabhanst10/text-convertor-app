import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import DarkMode from "./DarkMode";
import TextForm from "./TextForm";
function Navbarr(props) {
  const [dark, setDark] = useState(false);
  DarkMode(dark);
  return (
    <Navbar bg={dark ? "dark" : "light"} expand="lg">
      <Container>
        <Navbar.Brand className={dark ? "text-light" : "text-dark"}>
          {props.title}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ borderColor: "white", color: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={dark ? "text-light" : "text-dark"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={dark ? "text-light" : "text-dark"}
            >
              About
            </Nav.Link>

            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Dark Mode"
                onChange={(e) => {
                  setDark(!dark)}
                
                }
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
Navbarr.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };
Navbarr.defaultProps = { title: "Learn react" };
export default Navbarr;
