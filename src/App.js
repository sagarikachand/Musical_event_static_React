import React, { Component } from 'react';
import Header from './components/header_footer/Header'
import  './resources/styles.css'
import Featured from './components/Featured/Featured'
import VenueInfo from './components/VenueInfo/VenueInfo'
import Highlights from './components/Highlights/Highlights'
import Pricing from './components/Pricing/Pricing'
import Location from './components/Location/Location'
import Footer from './components/header_footer/Footer'

import {Element} from 'react-scroll'




class App extends Component {
  render() {
    return (
      <div style={{ height: '1500px' , backgroundColor: 'cornFlowerBlue'}}>
        <Header/>
         <Element name="event">
         <Featured />
         </Element>
         <Element name="venueInfo">
             <VenueInfo />
         </Element>

          <Element name="highlights">
           <Highlights />
         </Element>

          <Element name="pricing">
              <Pricing />
         </Element>

          <Element name="location">
           <Location />
         </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
