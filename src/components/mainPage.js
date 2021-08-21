import React from 'react'; 
import Header from './header';
import Hero from './hero';
import Cards from './cards';
import Show from './sideShow';
import Footer from './footer';
import "./main.css"
class Main extends React.Component {

  


    render() {
      return (
       
       
<>
<Header/><br></br>
<div className="mainmain">
<Hero/>
<Cards/>
<Show/>
</div>
<Footer/>
{/* <iframe width="1000vh" height="1000vh" src="https://sketchfab.com/models/c14f100ad0584eafbc15afc66f81e59b/embed" title="lol"></iframe> */}

</>

      )
    }
  }
  
  export default Main;