import React from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import axios from "axios";

import "../index.css";
import Card from "react-bootstrap/Card";
import { Button, CardBody, CardText } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Chuckjokes() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://md-chuck-norris-jokes.herokuapp.com/jokes/?X-Api-Key=d3f43c4f-9ac9-45a2-8976-f26ab574a3c0"
      )
      .then((response) => {
        setRecords(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        const noJokePrompt = document.getElementById("no-joke");
        noJokePrompt.style.display = "block";
      });
  }, []);

  function displayData() {
    const dataContainer = document.getElementById("style-data");
    dataContainer.style.display = "block";
    const showButton = document.getElementById("style-load-top");
    const hideButton = document.getElementById("style-delete-top");
    showButton.style.display = "none";
    hideButton.style.display = "block";
  }

  function hideData() {
    const dataContainer = document.getElementById("style-data");
    dataContainer.style.display = "none";
    const showButton = document.getElementById("style-load-top");
    const hideButton = document.getElementById("style-delete-top");
    showButton.style.display = "block";
    hideButton.style.display = "none";
  }

  return (
    <div className="text-center">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <center>
          <Button variant="dark" onClick={displayData} id="style-load-top">
            Load Jokes
          </Button>
          <br />
          <Button variant="dark" onClick={hideData} id="style-delete-top">
            Hide Jokes
          </Button>
          <h1 id="no-jokes">Sorry No Jokes</h1>
        </center>

        <br />

        <Container className="mt-5 " id="style-data">
          <Row className="joke-display gap-3 ">
            {records.map((record) => (
              <Col key={record.id} className=" align-middle">
                <Card id="style-card" style={{ width: "18rem" }}>
                  <CardBody>
                    <Card.Title className="border border-3 border-dark border-top-0 border-start-0 border-end-0 shadow-lg">
                      <h1 id="style-data-author">{record.author}</h1>
                      <p id="style-data-id">Joke {record.id}</p>
                    </Card.Title>
                    <Card.Text>
                      <div
                        id="style-data-joke"
                        className="border border-3 border-dark border-top-0 border-start-0 border-end-0"
                      >
                        <p>{record.value}</p>
                      </div>
                      <div>
                        <p id="style-data-category">
                          Found in {record.category}
                        </p>
                      </div>
                    </Card.Text>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        <div id="loading" className="text-primary"></div>
      </div>
    </div>
  );
}

export default Chuckjokes;
