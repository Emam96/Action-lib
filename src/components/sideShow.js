import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./show.css";
// import Card1 from "./card";

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

        theObjectOfTheFig2: "https://sketchfab.com/models/62400639a96842de97a33eb2534e0e07/embed",

      theObjectOfTheFig:
        "https://sketchfab.com/models/62400639a96842de97a33eb2534e0e07/embed",

      inputForFigSearch: "",
    };
  }

  getFig = async (e) => {
    e.preventDefault();

    await this.setState({
      inputForFigSearch: e.target.value,
    });

    let requestURL = `https://api.sketchfab.com/v3/search?type=models&q=${this.state.inputForFigSearch}%20&animated=false`;

    let retryURL = await axios.get(requestURL);

    console.dir(retryURL.data.results[0].thumbnails.images[0].url);

    this.setState({

      theObjectOfTheFig: retryURL.data.results[0],
      theObjectOfTheFig2: retryURL.data.results[0].embedUrl,
    });
  };

  render() {
    return (

<>
        
      <div className="SIDE">
        


        <Form onChange={this.getFig}>
          <Form.Check
            style={{
              backgroundImage: `url(https://media.sketchfab.com/models/62400639a96842de97a33eb2534e0e07/thumbnails/d104284c89694720bd7801309ef73848/95ae50e602474757ae65eb75fd2fa221.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "70px",
            }}
            value="Gundam"
            name="search"
            type="radio"
            aria-label="radio 1"
          />
          <Form.Check
            style={{
              backgroundImage: `url(https://media.sketchfab.com/models/efd9244c04fd41879e3589d4aea1f128/thumbnails/ece5b58785a0426389d855208aef5a20/6c56d605386447729090bd622e187675.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "70px",
            }}
            type="radio"
            value="darth vader"
            name="search"
            aria-label="radio 1"
          />
          <Form.Check
            style={{
              backgroundImage: `url(https://media.sketchfab.com/models/c14f100ad0584eafbc15afc66f81e59b/thumbnails/9cabe1dc5499406f9c4e90c2cab68333/af99189e57824d3b9a680dc1fb635c00.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "70px",
            }}
            value="Naruto"
            name="search"
            type="radio"
            aria-label="radio 1"
          />
          <Form.Check
            style={{
              backgroundImage: `url(https://media.sketchfab.com/models/243e847cc3114796949bd1727d8d262e/thumbnails/00db82614c1e4314ab4898c4e66ec2f0/1024x576.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "70px",
            }}
            type="radio"
            value="optimus"
            name="search"
            aria-label="radio 1"
          />
          <Form.Check
            style={{
              backgroundImage: `url(https://media.sketchfab.com/models/4ba0f018777c4431aafb0384738d8c4e/thumbnails/acfa718b29b0417eaf2e5211735c3164/b81e6c5071af46ad9e44c437af6897c4.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "70px",
            }}
            value="rathalos"
            name="search"
            type="radio"
            aria-label="radio 1"
          />
          <Form.Check
            style={{
              backgroundImage: `url(https://media.sketchfab.com/models/702fff376bb84eeabe3f00d4b486e1da/thumbnails/8c4d998f866a4c509ec0f7d619258e6a/f2d1ce807bed4f30903fefe8340d6622.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "70px",
            }}
            type="radio"
            value="goku"
            name="search"
            aria-label="radio 1"
          />
          <Form.Check
            style={{
              backgroundImage: `url(https://media.sketchfab.com/models/62400639a96842de97a33eb2534e0e07/thumbnails/d104284c89694720bd7801309ef73848/95ae50e602474757ae65eb75fd2fa221.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "70px",
            }}
            value="Naruto"
            name="search"
            type="radio"
            aria-label="radio 1"
          />
          <Form.Check
            style={{
              backgroundImage: `url(https://media.sketchfab.com/models/62400639a96842de97a33eb2534e0e07/thumbnails/d104284c89694720bd7801309ef73848/95ae50e602474757ae65eb75fd2fa221.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "70px",
            }}
            type="radio"
            value="Lee"
            name="search"
            aria-label="radio 1"
          />
          <Form.Check
            style={{
              backgroundImage: `url(https://media.sketchfab.com/models/62400639a96842de97a33eb2534e0e07/thumbnails/d104284c89694720bd7801309ef73848/95ae50e602474757ae65eb75fd2fa221.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "70px",
            }}
            value="Naruto"
            name="search"
            type="radio"
            aria-label="radio 1"
          />
          <Form.Check
            style={{
              backgroundImage: `url(https://media.sketchfab.com/models/62400639a96842de97a33eb2534e0e07/thumbnails/d104284c89694720bd7801309ef73848/95ae50e602474757ae65eb75fd2fa221.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "70px",
            }}
            value="Naruto"
            name="search"
            type="radio"
            aria-label="radio 1"
          />
          <Form.Check
            style={{
              backgroundImage: `url(https://media.sketchfab.com/models/62400639a96842de97a33eb2534e0e07/thumbnails/d104284c89694720bd7801309ef73848/95ae50e602474757ae65eb75fd2fa221.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "70px",
            }}
            value="Naruto"
            name="search"
            type="radio"
            aria-label="radio 1"
          />
          <Form.Check
            style={{
              backgroundImage: `url(https://media.sketchfab.com/models/62400639a96842de97a33eb2534e0e07/thumbnails/d104284c89694720bd7801309ef73848/95ae50e602474757ae65eb75fd2fa221.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "70px",
            }}
            value="Naruto"
            name="search"
            type="radio"
            aria-label="radio 1"
          />
          <Form.Check
            style={{
              backgroundImage: `url(https://media.sketchfab.com/models/62400639a96842de97a33eb2534e0e07/thumbnails/d104284c89694720bd7801309ef73848/95ae50e602474757ae65eb75fd2fa221.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "70px",
            }}
            value="Naruto"
            name="search"
            type="radio"
            aria-label="radio 1"
          />
        </Form>

        <iframe
          src={this.state.theObjectOfTheFig2}
          title="lol"
        ></iframe>
      </div>
      </>
    );
  }
}

export default Show;
