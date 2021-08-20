import React from 'react'; 
import Header from './header';
import Hero from './hero';
import Cards from './cards';
import "./main.css"
class Main extends React.Component {

  


    render() {
      return (
       
       
<>
<Header/><br></br>
<div className="mainmain">
<Hero/>
<Cards/>
</div>
</>

      )
    }
  }
  
  export default Main;