/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./MyNavbar.css";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="container position-relative">
      <Container fluid className="position-sticky top-0">
        <Navbar.Brand className="fw-bolder cursor-none" href="#">
          EmploymentGateway
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="d-flex gap-4">
              <Link to="/" className="text-decoration-none text-secondary">
                Home
              </Link>
              <Link
                to="/statistics"
                className="text-decoration-none text-secondary"
              >
                Statistics
              </Link>
              <Link
                to="/appliedJobs"
                className="text-decoration-none text-secondary"
              >
                Applied Jobs
              </Link>
              <Link to="/blog" className="text-decoration-none text-secondary">
                Blog
              </Link>
            </div>
          </Nav>
          <Button
            variant="outline-success"
            style={{
              backgroundImage:
                "linear-gradient(to left, #7E90FE 0%, #9873FF 100%)",
            }}
            className="text-white cursor-none"
          >
            Start Applying
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
