import React from "react";
import { Card, Button } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

class Cards extends React.Component {
  render() {
    return (
      <div className="CARD">
        <Card.Img variant="top" src={this.props.src} />
        <Card.Body>
          <Card.Text>{this.props.title}</Card.Text>
          <Button variant="primary">CLICK HERE</Button>
        </Card.Body>
      </div>
    );
  }
}

export default Cards;
