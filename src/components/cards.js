import React from "react";
import { Card } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cards.css"
import Card1 from "./card";

class Cards extends React.Component {
  render() {
    return (
        <>
        <h2>STORES</h2><br></br>

      <div className="CARDS">
        <Card style={{ width: "25rem" }}>
          <Card1
            src={
              "https://special.goodsmile.info/figma_dai/images/img_figma_pc.png"
            }
            title={"Japanese stores"}
          />
        </Card>

        <Card style={{ width: "25rem" }}>
          <Card1
            src={
              "https://i5.walmartimages.com/dfw/4ff9c6c9-a7ca/k2-_9ad58164-6fbd-4c9c-b983-23575d010fac.v1.jpg"
            }
            title={"American stores"}
          />
        </Card>

        <Card style={{ width: "25rem" }}>
          <Card1
            src={
              "https://cdn.goodq.top/caches/47215fc4bca6fb17a98adf5ec373b153/aHR0cHM6Ly93d3cuODZmYXNoaW9uLm5ldC9xZnktY29udGVudC91cGxvYWRzLzIwMjEvMDEvOTg1NDExYTgzMWNjNjE4M2EzNjAyZGJjNDAzZjZlZDItMTAwLndlYnA_p_p100_p_3D.m.webp"
            }
            title={"Custom"}
          />
        </Card>
      </div>
      </>
    );
  }
}

export default Cards;
