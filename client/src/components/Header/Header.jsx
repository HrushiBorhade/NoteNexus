import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">NoteNexus</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={() => {}}
              />
            </Form>
          </Nav>
          <Nav>
            <>
              <Nav.Link href="/mynotes">My Notes</Nav.Link>
              <NavDropdown
                title={"Hrushi Borhade"}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/profile">
                  {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    /> */}
                  My Profile
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    localStorage.removeItem("userInfo");
                    navigate("/");
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
