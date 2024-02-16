import React, { useEffect, useState } from "react";
import {
  Badge,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Navbar,
  Container,
  Nav,
  Button,
  NavDropdown,
  NavbarCollapse,
  Form,
} from "react-bootstrap";
import "./style.css";

const NavBarPost = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <header
      style={{
        paddingTop: "5px",
        background: "#FFFF",
        color: "blake",
        marginBottom: "20px",
        height: "55px",
      }}
    >
      <Navbar
        expand="lg"
        bg="light"
        variant="Secondary"
        style={{
          paddingTop: "5px",
          background: "#FFFF",
          color: "white",
          marginBottom: "20px",
          position: "fixed",
          height: "55px",
          width:"100%",
          zIndex:"10"
        }}
      >
        <Container>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Brand href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </Navbar.Brand>

          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
              {/* Heart Notifications */}
              <Nav className="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <Nav.Link href="/Home">
                  <Button
                    className="position-relative border border-0"
                    variant="outline-danger"
                    border="none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#ffff"
                      stroke="black"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>

                    <Badge
                      pill
                      bg="danger"
                      className="position-absolute top-0 start-100 translate-middle"
                    >
                      6<span className="visually-hidden">unread messages</span>
                    </Badge>
                  </Button>
                </Nav.Link>
              </Nav>
              {/* Bill Notifications */}
              <Nav className="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <Nav.Link href="/Home">
                  <Button
                    className="position-relative border border-0"
                    variant="outline-info"
                    border="none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#ffff"
                      stroke="black"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-bell"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    <Badge
                      pill
                      bg="danger"
                      className="position-absolute top-0 start-100 translate-middle"
                    >
                      99+
                      <span className="visually-hidden">unread messages</span>
                    </Badge>
                  </Button>
                </Nav.Link>
              </Nav>{" "}
              {/* Message Notifications */}
              <Nav className="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <Nav.Link href="/Home">
                  <Button
                    className="position-relative border border-0"
                    variant="outline-info"
                    border="none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#ffff"
                      stroke="black"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <Badge
                      pill
                      bg="danger"
                      className="position-absolute top-0 start-100 translate-middle"
                    >
                      99+
                      <span className="visually-hidden">unread messages</span>
                    </Badge>
                  </Button>
                </Nav.Link>
              </Nav>{" "}
              {/* Cate Notifications */}
              <Nav className="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <Nav.Link href="/Home">
                  <Button
                    className="position-relative border border-0"
                    variant="outline-info"
                    border="none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#ffff"
                      stroke="black"
                      stroke-width="1"
                      //   stroke-linecap="butt"
                      //   stroke-linejoin="miter"
                      class="feather feather-message-square"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <Badge
                      pill
                      bg="info"
                      className="position-absolute top-0 start-100 translate-middle"
                    >
                      99+
                      <span className="visually-hidden">unread messages</span>
                    </Badge>
                  </Button>
                </Nav.Link>
              </Nav>{" "}
            </Nav>

            {/* DropDown section*/}
            <Nav className="align-items-center">
              <NavbarCollapse>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                  width={"1px"}
                  height={"10px"}
                />
              </NavbarCollapse>
              <Nav.Link href="#">
                <i className="fas fa-shopping-cart"></i>
              </Nav.Link>

              <NavDropdown
                title={
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                }
                id="navbarDropdownMenuAvatar"
                align="end"
              >
                <NavDropdown.Item href="#">My profile</NavDropdown.Item>
                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBarPost;
