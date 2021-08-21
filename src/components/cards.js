import React from "react";
import { Card } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cards.css"
import Card1 from "./card";

class Cards extends React.Component {
  render() {
    return (
        <>
        <hr style={{width:"80%", margin:"0 auto"}}></hr>
        <span id="ol">STORES</span><br></br>

      <div className="CARDS">
        <Card style={{ width: "22rem" }}>
          <Card1
            src={
              "https://yugen-collectibles.com/8868-large_default/naruto-shippuden-gem-series-uzumaki-naruto-shinobi-world-war-ver.jpg"
            }
            title={"Japanese stores"}
          />
        </Card>

        <Card style={{ width: "22rem" }}>
          <Card1
            src={
              "https://cdn.shopify.com/s/files/1/0169/6995/7440/products/OP-Hero_3bc4f015-41d1-49aa-98c5-c13ac5d88137_400x400.jpg?v=1628864232"
            }
            title={"American stores"}
          />
        </Card>

        <Card style={{ width: "22rem" }}>
          <Card1
            src={
              "http://i.ebayimg.com/images/g/6HkAAOSwqlpb0rqo/s-l500.jpg"
            }
            title={"Custom"}
          />
        </Card>
      </div>
      
      <span style={{ position: "absolute", top: " 85rem", left: "10.5rem", fontFamily: "sans-serif", fontSize: "1.5pc" }}>Latest Figures</span>
      
      </>
    );
  }
}

export default Cards;
