import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Alert from "react-bootstrap/Alert";

function Topnav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlehide = () => setShow(false);

  //gets categories
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://md-chuck-norris-jokes.herokuapp.com/jokes/categories/?X-Api-Key=d3f43c4f-9ac9-45a2-8976-f26ab574a3c0"
      )
      .then((response) => {
        setRecords(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  function uploadjoke() {
    const API_KEY = "d3f43c4f-9ac9-45a2-8976-f26ab574a3c0";
    const joke = document.getElementById("joke-input").value;
    const category = document.getElementById("category-input").value;

    axios
      .post(
        "https://md-chuck-norris-jokes.herokuapp.com/jokes/",
        {
          value: joke,
          category: category,
        },
        {
          headers: {
            "X-Api-Key": API_KEY,
          },
        }
      )
      .then(function (response) {
        const successAlert = document.getElementById("success-alert");
        successAlert.style.display = "block";
        console.log("success added " + joke);
      })
      .catch(function (error) {
        const errorAlert = document.getElementById("error-alert");
        errorAlert.style.display = "block";
        console.log(error);
      });
  }

  return (
    <Nav className="border border-dark py-4 px-4 shadow-lg" id="nav-main">
      <br />
      <h1 id="style-nav-top">Chuck Jokes</h1>
      <div id="style-button-div">
        <Button
          variant="dark"
          onClick={handleShow}
          id="style-button"
          className="px-4 py-1"
        >
          Add Joke
        </Button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          backdrop="static"
          id="style-offcanvas-bg"
        >
          <Offcanvas.Header
            closeButton
            className="border border-black border-top-0 border-start-0 border-end-0 style-offcanvas-nav"
          >
            <Offcanvas.Title id="style-nav-top">
              <h1>Chucks Jokes</h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <Row>
                <Col>
                  <h1
                    id="style-offcanvas-head"
                    className=" ms-2 mt-3 inline-baseline"
                  >
                    Welcome to the Joke Portal
                  </h1>
                </Col>
                <Col>
                  <img
                    src="./yingyang.png"
                    alt=""
                    id="style-yingyang"
                    className="position-absolute mt-5"
                  />
                </Col>
              </Row>
            </div>
            <div>
              <Form>
                <Form.Group>
                  <Form.Label>
                    <h6 id="style-joke-form" className="mt-3">
                      Enter Joke
                    </h6>
                    <Form.Control
                      type="text"
                      id="joke-input"
                      className="bg-dark border-black style-placeholder"
                    />
                    <p
                      id="style-joke-subtext"
                      className="mt-2 text-center me-3"
                    >
                      Your jokes are safe with us
                    </p>
                  </Form.Label>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    <h6 id="style-joke-form" className="mt-3">
                      Select Category
                    </h6>
                    <Form.Select
                      aria-label="Select a category"
                      className="bg-dark border-dark text-white"
                      id="category-input"
                    >
                      {records.map((jokeData) => (
                        <option value={jokeData}>{jokeData}</option>
                      ))}
                    </Form.Select>
                  </Form.Label>
                </Form.Group>
              </Form>
              <br />
              <Row>
                <Col>
                  <Button
                    className="btn btn-dark"
                    onClick={uploadjoke}
                    id="style-submit-button"
                  >
                    Submit Joke
                  </Button>
                </Col>
                <Col>
                  <Button
                    onClick={handlehide}
                    className="btn btn-dark"
                    id="style-cancel-button"
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            </div>
            <div>
              <div id="success-alert" className="mt-5">
                <Alert variant="success">
                  Joke Uploaded Refresh To View Joke!
                </Alert>
              </div>
              <div id="error-alert">
                <Alert variant="danger">Joke Error Please Refresh 🆘</Alert>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </Nav>
  );
}

export default Topnav;
